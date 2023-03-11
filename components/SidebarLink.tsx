"use client";

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
// This only works in the client, its a hook and is based on a browser API
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = {Settings, User, Grid, Calendar};

const SidebarLink = ({ link }: any) =>
{
	const pathname = usePathname();
	let isActive = false;

	if (pathname === link.link)
	{
		isActive = true;
	}

	const Icon = icons[link.icon];

	return (
		<Link href={link.link}>
			<Icon size={40} className={clsx("stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out", isActive && "stroke-violet-600")}/>
		</Link>
	);
};

export default SidebarLink;