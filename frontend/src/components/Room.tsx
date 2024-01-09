import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        // logic to init user to the room
    }, [name])

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Navbar */}
            <header className="flex items-center justify-between px-4 py-2 bg-white shadow border-b border-black/20">
                <h1 className="text-2xl font-bold text-gray-800">Omegle</h1>
                <div className="text-sm text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 mr-1 inline-block"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Online: 1234</span>
                </div>
            </header>
            {/* Main */}
            <main className="flex-1 gap-1 overflow-auto p-4 bg-white flex justify-center">
                {/* Video Section */}
                <div className="flex flex-col space-y-4 w-1/2">
                    <video className="overflow-hidden shadow-lg w-full mx-auto p-4 h-full border-2 border-gray-300 rounded-md bg-black"></video>
                    <video className="overflow-hidden shadow-lg w-full mx-auto p-4 h-full border-2 border-gray-300 rounded-md bg-black"></video>
                </div>
                {/* Chat Box */}
                <div className="w-px bg-black/20 mx-4" />
                <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-3xl p-4 space-y-4 w-1/2 flex flex-col h-full">
                    <div className="flex-1 overflow-auto space-y-4 w-full">
                        <div className="flex items-start gap-4">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">XYZ</span>
                            </span>
                            <div className="text-sm">
                                <div className="font-semibold">XYZ</div>
                                <div>Hello, how are you?</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 justify-end">
                            <div className="text-sm text-right">
                                <div className="font-semibold">You</div>
                                <div>I'm good, thanks! How about you?</div>
                            </div>
                            <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">You</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start justify-between px-4 py-2 bg-white shadow">
                        <div className="flex-1 mr-4">
                            <input
                                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                                placeholder="Type your message..."
                            />
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 mr-2">
                            Send
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Next Person
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}