// ============================================
// XLP UI - Combobox Component
// ============================================

import type {FC, ReactNode} from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Box, Flex, Input, Text,} from "@chakra-ui/react";
import {FiCheck, FiChevronDown, FiX} from "react-icons/fi";

export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
}

export interface XlpComboboxProps {
    /** Options to display */
    options: ComboboxOption[];
    /** Selected value */
    value?: string;
    /** Callback when value changes */
    onChange?: (value: string | null) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Whether the combobox is disabled */
    disabled?: boolean;
    /** Whether the combobox is clearable */
    clearable?: boolean;
    /** Whether to allow creating new options */
    creatable?: boolean;
    /** Callback when creating new option */
    onCreate?: (value: string) => void;
    /** Size of the combobox */
    size?: 'sm' | 'md' | 'lg';
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Color palette for selected state */
    colorPalette?: 'blue' | 'green' | 'purple' | 'teal' | 'gray';
    /** Label for the combobox */
    label?: string;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
    /** No results text */
    noResultsText?: string;
    /** Max height of dropdown */
    maxDropdownHeight?: number;
}

/**
 * XlpCombobox - An autocomplete/combobox component
 */
export const XlpCombobox: FC<XlpComboboxProps> = ({
                                                      options,
                                                      value,
                                                      onChange,
                                                      placeholder = "Search...",
                                                      disabled = false,
                                                      clearable = true,
                                                      creatable = false,
                                                      onCreate,
                                                      size = 'md',
                                                      borderRadius = 'md',
                                                      colorPalette = 'blue',
                                                      label,
                                                      error,
                                                      helperText,
                                                      noResultsText = "No results found",
                                                      maxDropdownHeight = 200,
                                                  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(() =>
            options.find(opt => opt.value === value),
        [options, value]
    );

    const filteredOptions = useMemo(() => {
        if (!searchQuery) return options;
        const query = searchQuery.toLowerCase();
        return options.filter(opt =>
            opt.label.toLowerCase().includes(query) ||
            opt.value.toLowerCase().includes(query)
        );
    }, [options, searchQuery]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setIsOpen(true);
        setHighlightedIndex(0);
    }, []);

    const handleSelect = useCallback((option: ComboboxOption) => {
        if (option.disabled) return;
        onChange?.(option.value);
        setSearchQuery('');
        setIsOpen(false);
        inputRef.current?.blur();
    }, [onChange]);

    const handleClear = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        onChange?.(null);
        setSearchQuery('');
        inputRef.current?.focus();
    }, [onChange]);

    const handleCreate = useCallback(() => {
        if (creatable && searchQuery && onCreate) {
            onCreate(searchQuery);
            setSearchQuery('');
            setIsOpen(false);
        }
    }, [creatable, searchQuery, onCreate]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    Math.min(prev + 1, filteredOptions.length - 1)
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev => Math.max(prev - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (filteredOptions[highlightedIndex]) {
                    handleSelect(filteredOptions[highlightedIndex]);
                } else if (creatable && searchQuery) {
                    handleCreate();
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setSearchQuery('');
                break;
        }
    }, [filteredOptions, highlightedIndex, handleSelect, creatable, searchQuery, handleCreate]);

    // Scroll highlighted option into view
    useEffect(() => {
        if (listRef.current && isOpen) {
            const highlighted = listRef.current.children[highlightedIndex] as HTMLElement;
            if (highlighted) {
                highlighted.scrollIntoView({block: 'nearest'});
            }
        }
    }, [highlightedIndex, isOpen]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setSearchQuery('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const sizeStyles = {
        sm: {h: '32px', fontSize: 'sm', px: 3},
        md: {h: '40px', fontSize: 'md', px: 4},
        lg: {h: '48px', fontSize: 'lg', px: 4},
    };

    const showClear = clearable && value && !disabled;
    const showCreateOption = creatable && searchQuery &&
        !filteredOptions.some(opt => opt.label.toLowerCase() === searchQuery.toLowerCase());

    return (
        <Box position="relative" w="100%">
            {label && (
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                    {label}
                </Text>
            )}

            <Box position="relative">
                <Input
                    ref={inputRef}
                    value={isOpen ? searchQuery : (selectedOption?.label || '')}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    borderRadius={borderRadius}
                    pr={showClear ? '60px' : '36px'}
                    borderColor={error ? 'red.500' : 'border.default'}
                    _focus={{borderColor: error ? 'red.500' : `${colorPalette}.500`}}
                    {...sizeStyles[size]}
                />

                <Flex
                    position="absolute"
                    right={2}
                    top="50%"
                    transform="translateY(-50%)"
                    gap={1}
                    align="center"
                >
                    {showClear && (
                        <Box
                            as="button"
                            onClick={handleClear}
                            p={1}
                            borderRadius="sm"
                            color="text.tertiary"
                            _hover={{color: 'text.primary', bg: 'bg.secondary'}}
                            aria-label="Clear selection"
                        >
                            <FiX size={14}/>
                        </Box>
                    )}
                    <Box color="text.tertiary" pointerEvents="none">
                        <FiChevronDown
                            size={16}
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s'
                            }}
                        />
                    </Box>
                </Flex>
            </Box>

            {isOpen && (
                <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    right={0}
                    mt={1}
                    bg="white"
                    _dark={{bg: "gray.800"}}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius={borderRadius}
                    boxShadow="lg"
                    zIndex={9999}
                    overflow="hidden"
                >
                    <Box
                        ref={listRef}
                        maxH={`${maxDropdownHeight}px`}
                        overflowY="auto"
                    >
                        {filteredOptions.length === 0 && !showCreateOption ? (
                            <Box p={3} color="text.tertiary" textAlign="center" fontSize="sm">
                                {noResultsText}
                            </Box>
                        ) : (
                            <>
                                {filteredOptions.map((option, index) => (
                                    <Flex
                                        key={option.value}
                                        px={3}
                                        py={2}
                                        align="center"
                                        gap={2}
                                        cursor={option.disabled ? 'not-allowed' : 'pointer'}
                                        bg={highlightedIndex === index ? 'bg.secondary' : 'transparent'}
                                        color={option.disabled ? 'text.tertiary' : 'text.primary'}
                                        _hover={!option.disabled ? {bg: 'bg.secondary'} : undefined}
                                        onClick={() => handleSelect(option)}
                                        role="option"
                                        aria-selected={option.value === value}
                                        aria-disabled={option.disabled}
                                    >
                                        {option.icon && (
                                            <Box color="text.secondary">{option.icon}</Box>
                                        )}
                                        <Text flex={1} fontSize={sizeStyles[size].fontSize}>
                                            {option.label}
                                        </Text>
                                        {option.value === value && (
                                            <Box color={`${colorPalette}.500`}>
                                                <FiCheck size={16}/>
                                            </Box>
                                        )}
                                    </Flex>
                                ))}

                                {showCreateOption && (
                                    <Flex
                                        px={3}
                                        py={2}
                                        align="center"
                                        gap={2}
                                        cursor="pointer"
                                        bg={highlightedIndex === filteredOptions.length ? 'bg.secondary' : 'transparent'}
                                        _hover={{bg: 'bg.secondary'}}
                                        onClick={handleCreate}
                                        color={`${colorPalette}.500`}
                                    >
                                        <Text fontSize={sizeStyles[size].fontSize}>
                                            Create "{searchQuery}"
                                        </Text>
                                    </Flex>
                                )}
                            </>
                        )}
                    </Box>
                </Box>
            )}

            {error && (
                <Text fontSize="xs" color="red.500" mt={1}>
                    {error}
                </Text>
            )}
            {helperText && !error && (
                <Text fontSize="xs" color="text.tertiary" mt={1}>
                    {helperText}
                </Text>
            )}
        </Box>
    );
};

