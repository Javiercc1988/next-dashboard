import Image from "next/image";
import { IoBrowsers, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsers />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator />,
    title: "Shopping Cart",
    subtitle: "Carrito de compra",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 h-screen overflow-y-scroll w-64"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex gap-2 items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>
            Dash<span className="text-blue-500">8</span>.
          </span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="profile image"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Javier Callejón
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            icon={item.icon}
            path={item.path}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
