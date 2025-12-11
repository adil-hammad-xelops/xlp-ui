// ============================================
// XLP UI - Component Library
// ============================================

// ----- BUTTONS -----
export {XlpButton, type XlpButtonProps} from './components/Button';
export {XlpIconButton, type XlpIconButtonProps} from './components/IconButton';

// ----- FORMS -----
export {XlpInput, type XlpInputProps} from './components/Input';
export {XlpTextarea, type XlpTextareaProps} from './components/Textarea';
export {XlpSelect, type XlpSelectProps, type SelectOption} from './components/Select';
export {XlpCheckbox, type XlpCheckboxProps} from './components/Checkbox';
export {
    XlpRadioGroup, XlpRadio, type XlpRadioGroupProps, type XlpRadioProps, type RadioOption
} from './components/Radio';
export {XlpSwitch, type XlpSwitchProps} from './components/Switch';
export {XlpNumberInput, type XlpNumberInputProps} from './components/NumberInput';
export {XlpCombobox, type XlpComboboxProps, type ComboboxOption} from './components/Combobox';

// ----- DATA DISPLAY -----
export {XlpBadge, type XlpBadgeProps} from './components/Badge';
export {XlpTag, type XlpTagProps} from './components/Tag';
export {XlpAvatar, XlpAvatarGroup, type XlpAvatarProps, type XlpAvatarGroupProps} from './components/Avatar';
export {XlpTable, type XlpTableProps, type TableColumn} from './components/Table';
export {XlpDataTable, createColumnHelper, type XlpDataTableProps} from './components/DataTable';
export {XlpAccordion, type XlpAccordionProps, type AccordionItem} from './components/Accordion';
export {
    XlpCard,
    XlpCardHeader,
    XlpCardBody,
    XlpCardFooter,
    type XlpCardProps,
    type XlpCardHeaderProps,
    type XlpCardBodyProps,
    type XlpCardFooterProps
} from './components/Card';

// ----- FEEDBACK -----
export {XlpAlert, type XlpAlertProps} from './components/Alert';
export {XlpSpinner, type XlpSpinnerProps} from './components/Spinner';
export {XlpProgress, type XlpProgressProps} from './components/Progress';
export {
    XlpSkeleton,
    XlpSkeletonText,
    XlpSkeletonCircle,
    type XlpSkeletonProps,
    type XlpSkeletonTextProps,
    type XlpSkeletonCircleProps
} from './components/Skeleton';
export {XlpEmptyState, type XlpEmptyStateProps} from './components/EmptyState';

// ----- OVERLAY -----
export {XlpModal, XlpModalTrigger, type XlpModalProps, type XlpModalTriggerProps} from './components/Modal';
export {XlpDrawer, type XlpDrawerProps} from './components/Drawer';
export {XlpTooltip, type XlpTooltipProps} from './components/Tooltip';
export {XlpPopover, type XlpPopoverProps} from './components/Popover';

// ----- NAVIGATION -----
export {XlpTabs, type XlpTabsProps, type TabItem} from './components/Tabs';
export {XlpMenu, type XlpMenuProps, type MenuItem, type MenuGroup} from './components/Menu';
export {XlpBreadcrumb, type XlpBreadcrumbProps, type BreadcrumbItem} from './components/Breadcrumb';
export {XlpPagination, type XlpPaginationProps} from './components/Pagination';

// ----- TYPOGRAPHY -----
export {
    XlpHeading,
    XlpText,
    XlpDisplay,
    XlpCode,
    XlpLink,
    type XlpHeadingProps,
    type XlpTextProps,
    type XlpDisplayProps,
    type XlpCodeProps,
    type XlpLinkProps
} from './components/Typography';

// ----- LAYOUT & SPACING -----
export {XlpDivider, type XlpDividerProps} from './components/Divider';
export {
    XlpSpacer,
    XlpStack,
    XlpContainer,
    XlpInset,
    spacingTokens,
    type XlpSpacerProps,
    type XlpStackProps,
    type XlpContainerProps,
    type XlpInsetProps,
    type SpacingValue
} from './components/Spacing';

// ----- CHARTS -----
export {
    XlpBarChart,
    XlpDonutChart,
    XlpLineChart,
    XlpAreaChart,
    XlpRadarChart,
    XlpStatCard,
    XlpSparkline,
    XlpProgressRing,
    XlpLabeledProgress,
    XlpSegmentedProgress,
    type XlpBarChartProps,
    type BarChartDataPoint,
    type XlpDonutChartProps,
    type DonutChartDataPoint,
    type XlpLineChartProps,
    type LineChartDataPoint,
    type LineChartSeries,
    type XlpAreaChartProps,
    type AreaChartDataPoint,
    type AreaChartSeries,
    type XlpRadarChartProps,
    type RadarChartDataPoint,
    type RadarChartSeries,
    type XlpStatCardProps,
    type XlpSparklineProps,
    type XlpProgressRingProps,
    type XlpLabeledProgressProps,
    type XlpSegmentedProgressProps,
    type ProgressSegment,
} from './components/charts';

// ----- THEME -----
export {default as xlpTheme} from './theme/index';
export {semanticTokens, colors, createColorToken, radii, shadows} from './theme/Colors';
export {globalCss} from './theme/GlobalCss';
export {fonts, fontWeights} from './theme/Fonts';

// ----- PROVIDER -----
export {XlpProvider, type XlpProviderProps} from './components/ui/XlpProvider';

// ----- RE-EXPORTS FROM CHAKRA UI -----
// Layout primitives
export {
    Box,
    Flex,
    Grid,
    Stack,
    HStack,
    VStack,
    Container,
    Center,
    SimpleGrid,
} from '@chakra-ui/react';

// Typography
export {
    Text,
    Heading,
    Code,
    Em,
    Strong,
} from '@chakra-ui/react';

// Media
export {
    Image,
    Icon,
} from '@chakra-ui/react';

// Utilities
export {
    Portal,
    Show,
    For,
} from '@chakra-ui/react';
