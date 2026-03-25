const defaultLinks = [
	{ label: "Instagram", href: "#" },
	{ label: "ArtStation", href: "#" },
	{ label: "LinkedIn", href: "#" },
	{ label: "Correo", href: "#contact" },
];

export default function Footer({
	brand = "ARCHIVE_01",
	email = "hola@elbedi.com",
	phone = "+52 55 0000 0000",
	links = defaultLinks,
}) {
	const year = new Date().getFullYear();

	return (
		<footer className="full-width border-t border-[#1c1b1b] bg-[#0e0e0e] px-6 py-12">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<div className="font-headline font-bold tracking-tighter text-[#ccff00]">{brand}</div>
				<div className="flex space-x-8 font-headline text-[10px] tracking-widest uppercase">
					{links.map((item) => (
						<a
							key={`${item.href}-${item.label}`}
							href={item.label === "Correo" ? `mailto:${email}` : item.href}
							className="text-[#3a3939] transition-all hover:text-[#ccff00] hover:underline underline-offset-4">
							{item.label}
						</a>
					))}
				</div>
				<div className="font-headline text-[10px] tracking-widest text-[#3a3939] uppercase">
					©{year} TERMINAL_SYSTEMS. TODOS LOS DERECHOS RESERVADOS.
				</div>
			</div>
			<a href={`tel:${phone}`} className="sr-only">
				{phone}
			</a>
		</footer>
	);
}
