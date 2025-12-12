import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./index-BCRR_Fbj.js";import{T as a}from"./index-C5uWXf4o.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";const O={0:"0","0.5":"0.125rem",1:"0.25rem","1.5":"0.375rem",2:"0.5rem","2.5":"0.625rem",3:"0.75rem","3.5":"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},j=({size:n="4",axis:o="vertical"})=>{const i=o==="vertical"?"height":"width",s=typeof n=="number"?`${n}px`:O[n]||n;return e.jsx(r,{[i]:s,flexShrink:0,"aria-hidden":"true"})},t=({children:n,gap:o="4",direction:i="column",align:s,justify:d,wrap:p=!1,padding:c,margin:k,className:y})=>e.jsx(r,{display:"flex",flexDirection:i,gap:o,alignItems:s,justifyContent:d,flexWrap:p?"wrap":"nowrap",p:c,m:k,className:y,children:n}),$={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px",full:"100%"},_=({children:n,maxWidth:o="xl",centerContent:i=!1,paddingX:s="4",paddingY:d,className:p})=>{const c=$[o]||o;return e.jsx(r,{maxW:c,mx:"auto",px:s,py:d,display:i?"flex":void 0,flexDirection:i?"column":void 0,alignItems:i?"center":void 0,className:p,children:n})},m=({children:n,all:o,x:i,y:s,top:d,right:p,bottom:c,left:k,className:y})=>e.jsx(r,{p:o,px:i,py:s,pt:d,pr:p,pb:c,pl:k,className:y,children:n});try{j.displayName="XlpSpacer",j.__docgenInfo={description:"XlpSpacer - A component that adds space between elements",displayName:"XlpSpacer",props:{size:{defaultValue:{value:"4"},description:"Size of the spacer",name:"size",required:!1,type:{name:"SpacingValue"}},axis:{defaultValue:{value:"vertical"},description:"Direction of the spacer",name:"axis",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{t.displayName="XlpStack",t.__docgenInfo={description:"XlpStack - A flexible stack component with configurable gap",displayName:"XlpStack",props:{gap:{defaultValue:{value:"4"},description:"Gap between items",name:"gap",required:!1,type:{name:"SpacingValue"}},direction:{defaultValue:{value:"column"},description:"Direction of the stack",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},align:{defaultValue:null,description:"Alignment",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},justify:{defaultValue:null,description:"Justification",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},wrap:{defaultValue:{value:"false"},description:"Whether to wrap items",name:"wrap",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"Padding",name:"padding",required:!1,type:{name:"SpacingValue"}},margin:{defaultValue:null,description:"Margin",name:"margin",required:!1,type:{name:"SpacingValue"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="XlpContainer",_.__docgenInfo={description:"XlpContainer - A centered container with max width",displayName:"XlpContainer",props:{maxWidth:{defaultValue:{value:"xl"},description:"Maximum width",name:"maxWidth",required:!1,type:{name:"string"}},centerContent:{defaultValue:{value:"false"},description:"Center the container",name:"centerContent",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:{value:"4"},description:"Horizontal padding",name:"paddingX",required:!1,type:{name:"SpacingValue"}},paddingY:{defaultValue:null,description:"Vertical padding",name:"paddingY",required:!1,type:{name:"SpacingValue"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="XlpInset",m.__docgenInfo={description:"XlpInset - A component for adding padding around content",displayName:"XlpInset",props:{all:{defaultValue:null,description:"All sides padding",name:"all",required:!1,type:{name:"SpacingValue"}},x:{defaultValue:null,description:"Horizontal padding",name:"x",required:!1,type:{name:"SpacingValue"}},y:{defaultValue:null,description:"Vertical padding",name:"y",required:!1,type:{name:"SpacingValue"}},top:{defaultValue:null,description:"Top padding",name:"top",required:!1,type:{name:"SpacingValue"}},right:{defaultValue:null,description:"Right padding",name:"right",required:!1,type:{name:"SpacingValue"}},bottom:{defaultValue:null,description:"Bottom padding",name:"bottom",required:!1,type:{name:"SpacingValue"}},left:{defaultValue:null,description:"Left padding",name:"left",required:!1,type:{name:"SpacingValue"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Layout/Spacing",component:t,parameters:{layout:"padded"},tags:["autodocs"]},l=({children:n,color:o="blue.100"})=>e.jsx(r,{bg:o,_dark:{bg:"blue.800"},p:4,borderRadius:"md",children:n||e.jsx(a,{children:"Box"})}),g={render:()=>e.jsxs(r,{children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Spacing Scale (showing gap sizes)"}),["1","2","4","6","8","12","16"].map(n=>e.jsxs(r,{mb:4,children:[e.jsxs(a,{fontSize:"sm",mb:2,children:["gap=",n," (",O[n],")"]}),e.jsxs(t,{direction:"row",gap:n,children:[e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]})]},n))]})},x={render:()=>e.jsxs(t,{gap:"4",children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{children:"Item 2"}),e.jsx(l,{children:"Item 3"})]})},u={render:()=>e.jsxs(t,{direction:"row",gap:"4",children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{children:"Item 2"}),e.jsx(l,{children:"Item 3"})]})},b={render:()=>e.jsxs(r,{children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Different Alignments"}),e.jsxs(t,{gap:"8",children:[e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'align="flex-start"'}),e.jsxs(t,{direction:"row",gap:"4",align:"flex-start",children:[e.jsx(r,{bg:"blue.100",_dark:{bg:"blue.800"},p:2,children:"Small"}),e.jsx(r,{bg:"blue.100",_dark:{bg:"blue.800"},p:6,children:"Large"}),e.jsx(r,{bg:"blue.100",_dark:{bg:"blue.800"},p:4,children:"Medium"})]})]}),e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'align="center"'}),e.jsxs(t,{direction:"row",gap:"4",align:"center",children:[e.jsx(r,{bg:"green.100",_dark:{bg:"green.800"},p:2,children:"Small"}),e.jsx(r,{bg:"green.100",_dark:{bg:"green.800"},p:6,children:"Large"}),e.jsx(r,{bg:"green.100",_dark:{bg:"green.800"},p:4,children:"Medium"})]})]}),e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'align="flex-end"'}),e.jsxs(t,{direction:"row",gap:"4",align:"flex-end",children:[e.jsx(r,{bg:"purple.100",_dark:{bg:"purple.800"},p:2,children:"Small"}),e.jsx(r,{bg:"purple.100",_dark:{bg:"purple.800"},p:6,children:"Large"}),e.jsx(r,{bg:"purple.100",_dark:{bg:"purple.800"},p:4,children:"Medium"})]})]})]})]})},f={render:()=>e.jsxs(r,{children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Using XlpSpacer"}),e.jsxs(r,{bg:"gray.100",_dark:{bg:"gray.800"},p:4,borderRadius:"md",children:[e.jsx(l,{children:"First Item"}),e.jsx(j,{size:"8"}),e.jsx(l,{color:"green.100",children:"Second Item (with 2rem gap)"}),e.jsx(j,{size:"4"}),e.jsx(l,{color:"purple.100",children:"Third Item (with 1rem gap)"})]})]})},h={render:()=>e.jsxs(r,{children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Container Widths"}),["sm","md","lg","xl"].map(n=>e.jsxs(r,{mb:4,children:[e.jsxs(a,{fontSize:"sm",mb:2,children:['maxWidth="',n,'"']}),e.jsx(_,{maxWidth:n,children:e.jsxs(r,{bg:"blue.100",_dark:{bg:"blue.800"},p:4,borderRadius:"md",children:["Container content (maxWidth: ",n,")"]})})]},n))]})},S={render:()=>e.jsxs(r,{children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Inset (Padding)"}),e.jsxs(t,{gap:"4",children:[e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'all="4"'}),e.jsx(r,{bg:"gray.200",_dark:{bg:"gray.700"},children:e.jsx(m,{all:"4",children:e.jsx(r,{bg:"blue.100",_dark:{bg:"blue.800"},children:"Content with padding"})})})]}),e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'x="8" y="2"'}),e.jsx(r,{bg:"gray.200",_dark:{bg:"gray.700"},children:e.jsx(m,{x:"8",y:"2",children:e.jsx(r,{bg:"green.100",_dark:{bg:"green.800"},children:"Different horizontal/vertical"})})})]}),e.jsxs(r,{children:[e.jsx(a,{fontSize:"sm",mb:2,children:'top="8" bottom="2"'}),e.jsx(r,{bg:"gray.200",_dark:{bg:"gray.700"},children:e.jsx(m,{top:"8",bottom:"2",x:"4",children:e.jsx(r,{bg:"purple.100",_dark:{bg:"purple.800"},children:"Custom top/bottom"})})})]})]})]})},B={render:()=>e.jsxs(r,{maxW:"400px",children:[e.jsx(a,{fontWeight:"bold",mb:4,children:"Wrapping Stack"}),e.jsx(t,{direction:"row",gap:"4",wrap:!0,children:[1,2,3,4,5,6,7,8].map(n=>e.jsxs(r,{bg:"blue.100",_dark:{bg:"blue.800"},p:4,borderRadius:"md",minW:"80px",children:["Item ",n]},n))})]})};var X,v,C;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontWeight="bold" mb={4}>Spacing Scale (showing gap sizes)</Text>\r
            {['1', '2', '4', '6', '8', '12', '16'].map(size => <Box key={size} mb={4}>\r
                    <Text fontSize="sm" mb={2}>gap={size} ({spacingTokens[size as keyof typeof spacingTokens]})</Text>\r
                    <XlpStack direction="row" gap={size as keyof typeof spacingTokens}>\r
                        <ColorBox />\r
                        <ColorBox />\r
                        <ColorBox />\r
                    </XlpStack>\r
                </Box>)}\r
        </Box>
}`,...(C=(v=g.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var V,I,T;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <XlpStack gap="4">\r
            <ColorBox>Item 1</ColorBox>\r
            <ColorBox>Item 2</ColorBox>\r
            <ColorBox>Item 3</ColorBox>\r
        </XlpStack>
}`,...(T=(I=x.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,W,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <XlpStack direction="row" gap="4">\r
            <ColorBox>Item 1</ColorBox>\r
            <ColorBox>Item 2</ColorBox>\r
            <ColorBox>Item 3</ColorBox>\r
        </XlpStack>
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var q,N,A;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontWeight="bold" mb={4}>Different Alignments</Text>\r
            <XlpStack gap="8">\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>align="flex-start"</Text>\r
                    <XlpStack direction="row" gap="4" align="flex-start">\r
                        <Box bg="blue.100" _dark={{
            bg: "blue.800"
          }} p={2}>Small</Box>\r
                        <Box bg="blue.100" _dark={{
            bg: "blue.800"
          }} p={6}>Large</Box>\r
                        <Box bg="blue.100" _dark={{
            bg: "blue.800"
          }} p={4}>Medium</Box>\r
                    </XlpStack>\r
                </Box>\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>align="center"</Text>\r
                    <XlpStack direction="row" gap="4" align="center">\r
                        <Box bg="green.100" _dark={{
            bg: "green.800"
          }} p={2}>Small</Box>\r
                        <Box bg="green.100" _dark={{
            bg: "green.800"
          }} p={6}>Large</Box>\r
                        <Box bg="green.100" _dark={{
            bg: "green.800"
          }} p={4}>Medium</Box>\r
                    </XlpStack>\r
                </Box>\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>align="flex-end"</Text>\r
                    <XlpStack direction="row" gap="4" align="flex-end">\r
                        <Box bg="purple.100" _dark={{
            bg: "purple.800"
          }} p={2}>Small</Box>\r
                        <Box bg="purple.100" _dark={{
            bg: "purple.800"
          }} p={6}>Large</Box>\r
                        <Box bg="purple.100" _dark={{
            bg: "purple.800"
          }} p={4}>Medium</Box>\r
                    </XlpStack>\r
                </Box>\r
            </XlpStack>\r
        </Box>
}`,...(A=(N=b.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,R,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontWeight="bold" mb={4}>Using XlpSpacer</Text>\r
            <Box bg="gray.100" _dark={{
      bg: "gray.800"
    }} p={4} borderRadius="md">\r
                <ColorBox>First Item</ColorBox>\r
                <XlpSpacer size="8" />\r
                <ColorBox color="green.100">Second Item (with 2rem gap)</ColorBox>\r
                <XlpSpacer size="4" />\r
                <ColorBox color="purple.100">Third Item (with 1rem gap)</ColorBox>\r
            </Box>\r
        </Box>
}`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,H,P;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontWeight="bold" mb={4}>Container Widths</Text>\r
            {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Box key={size} mb={4}>\r
                    <Text fontSize="sm" mb={2}>maxWidth="{size}"</Text>\r
                    <XlpContainer maxWidth={size}>\r
                        <Box bg="blue.100" _dark={{
          bg: "blue.800"
        }} p={4} borderRadius="md">\r
                            Container content (maxWidth: {size})\r
                        </Box>\r
                    </XlpContainer>\r
                </Box>)}\r
        </Box>
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,F,U;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontWeight="bold" mb={4}>Inset (Padding)</Text>\r
            <XlpStack gap="4">\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>all="4"</Text>\r
                    <Box bg="gray.200" _dark={{
          bg: "gray.700"
        }}>\r
                        <XlpInset all="4">\r
                            <Box bg="blue.100" _dark={{
              bg: "blue.800"
            }}>Content with padding</Box>\r
                        </XlpInset>\r
                    </Box>\r
                </Box>\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>x="8" y="2"</Text>\r
                    <Box bg="gray.200" _dark={{
          bg: "gray.700"
        }}>\r
                        <XlpInset x="8" y="2">\r
                            <Box bg="green.100" _dark={{
              bg: "green.800"
            }}>Different horizontal/vertical</Box>\r
                        </XlpInset>\r
                    </Box>\r
                </Box>\r
                <Box>\r
                    <Text fontSize="sm" mb={2}>top="8" bottom="2"</Text>\r
                    <Box bg="gray.200" _dark={{
          bg: "gray.700"
        }}>\r
                        <XlpInset top="8" bottom="2" x="4">\r
                            <Box bg="purple.100" _dark={{
              bg: "purple.800"
            }}>Custom top/bottom</Box>\r
                        </XlpInset>\r
                    </Box>\r
                </Box>\r
            </XlpStack>\r
        </Box>
}`,...(U=(F=S.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var Y,G,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Box maxW="400px">\r
            <Text fontWeight="bold" mb={4}>Wrapping Stack</Text>\r
            <XlpStack direction="row" gap="4" wrap>\r
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Box key={i} bg="blue.100" _dark={{
        bg: "blue.800"
      }} p={4} borderRadius="md" minW="80px">\r
                        Item {i}\r
                    </Box>)}\r
            </XlpStack>\r
        </Box>
}`,...(J=(G=B.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const oe=["SpacingTokens","StackVertical","StackHorizontal","StackWithAlignment","Spacer","Container","Inset","WrappingStack"];export{h as Container,S as Inset,f as Spacer,g as SpacingTokens,u as StackHorizontal,x as StackVertical,b as StackWithAlignment,B as WrappingStack,oe as __namedExportsOrder,le as default};
