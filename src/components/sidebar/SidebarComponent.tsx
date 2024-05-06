"use client";

import { Sidebar } from "flowbite-react";

import Link from "next/link";
import { MenuList } from "./menu";
import React, { useState } from "react";

type MenuItem = {
    name: string;
    path: string;
    icon: React.ElementType;
};

export default function SideBarComponent() {
    const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {menuList.map((item, index) => (
                        <Sidebar.Item
                            key={index}
                            as={Link}
                            href={item.path}
                            icon={item.icon}
                        >
                            {item.name}
                        </Sidebar.Item>
                    ))}
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <a className='text-xl font-medium text-green-700 hover:underline hover:text-green-500' href="/">Back to home page</a>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}