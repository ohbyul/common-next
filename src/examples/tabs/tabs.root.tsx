'use client';

import { CodeData } from "@/components/helpers/examples/code-demo";
import Editor from "@/components/Editor/Tiny";
import { useState } from "react";


import Tab from '@components/Tabs/Tab';
import { Tabs, TabItem } from "@/components/Tabs/items";
const code = `
'use client';
import Tab from '@components/Tabs/Tab';

function Component() {
	return (
		<>
			{/* // TabbedContent 컴포넌트에 tabsData를 전달하여 렌더링 */}
			<Tab tabsData={tabsData} />
		</>
	);
}
`;



function Component() {
	const [content, setConent] = useState('')
	const tabsData = [
		{ title: 'Tab 1', content: <div>Content for Tab 1</div>, disabled: false },
		{ title: 'Tab 2', content: <Editor setContent={setConent} />, disabled: false },
		{ title: 'Tab 3', content: <div>Content for Tab 2</div>, disabled: true },
	];

	return (
		<>
			{/* tab 컴포넌트 */}
			<Tab data={tabsData} />

			{/* flowbite 그대로 사용 */}
			<Tabs>
				<TabItem title="1111">
					<p>123</p>
				</TabItem>
				<TabItem title="Tab 2">
					<p>Tab 2</p>
				</TabItem>
				<TabItem title="Tab 2">
					<p>Tab 2222</p>
				</TabItem>
			</Tabs>
		</>

	);
}

export const root: CodeData = {
	type: 'single',
	code: {
		fileName: 'client',
		language: 'tsx',
		code,
	},
	githubSlug: 'tabs/tabs.root.tsx',
	component: <Component />,
};
