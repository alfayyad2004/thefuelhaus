import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 bg-zinc-950 text-center border-t border-zinc-900">
            <div className="container px-4 mx-auto flex flex-col items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zinc-900 p-2 ring-1 ring-white/10">
                    <Image
                        src="/logo.jpg"
                        alt="The Fuel Haus Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} The Fuel Haus TT. All rights reserved.
                </p>
            </div>
        </footer >
    );
}
