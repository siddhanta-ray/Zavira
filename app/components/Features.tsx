export default function Features() {
    const cards = [
        { id: 1, height: "h-68" },
        { id: 2, height: "h-44" },
        { id: 3, height: "h-36" },
        { id: 4, height: "h-40" },
        { id: 5, height: "h-64" },
        { id: 6, height: "h-48" },
    ];

    return (
        <section className="h-screen snap-start bg-gray-100 py-16 px-6" id="features">
            <h2 className="text-3xl font-bold text-gray-700 mb-10">Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`bg-gray-300 rounded-md ${card.height}`}
                    />
                ))}
            </div>
        </section>
    );
}






