
export default function Footer() {
    return (
        <footer className="py-8 bg-zinc-950 text-center border-t border-zinc-900">
            <div className="container px-4 mx-auto">
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} The Fuel Haus. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
