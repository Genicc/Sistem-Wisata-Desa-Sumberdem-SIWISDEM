export default function LokasiMap() {
    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">LOKASI</h2>

            <div className="w-full h-[500px] sm:h-[380px] md:h-[450px] lg:h-[520px] rounded-xl overflow-hidden shadow-lg mx-auto">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15801.982464544708!2d112.45343081204835!3d-8.050819625318727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789af79724d3b1%3A0xcd55a70c1c3a301a!2sSumberdem%2C%20Kec.%20Wonosari%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1756703317139!5m2!1sid!2sid"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
        </div>
        </section>
    );
}
