import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://cloudflare-imgbed.cyarin128.workers.dev/file/Blog/1779850293373_Q版茶凛.png",

	// 名字
	name: "Cyarin",

	// 个人签名
	bio: "Hello, I'm Cyarin.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "LOFTER",
			icon: "line-md:cookie-twotone",
			url: "https://nightmare128.lofter.com",
			showName: true,
		},
		{
			name: "X",
			icon: "line-md:twitter-twotone",
			url: "https://x.com/NNightmare128",
			showName: true,
		},
		{
			name: "Email",
			icon: "line-md:email-alt-twotone",
			url: "9ood2ea@gmail.com",
			showName: true,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: true,
		},
	],
};
