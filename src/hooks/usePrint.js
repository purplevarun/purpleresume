export function usePrint() {
	const print = (previewRef, name, settings) => {
		const content = previewRef.current?.innerHTML;
		if (!content) return;

		const {
			marginTop = 14,
			marginBottom = 14,
			marginLeft = 14,
			marginRight = 14,
		} = settings || {};

		const win = window.open("", "_blank");
		win.document.write(`
<!DOCTYPE html><html><head>
<meta charset="UTF-8" />
<title>${name} – Resume</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: white; }
  @page {
    margin: ${marginTop}mm ${marginRight}mm ${marginBottom}mm ${marginLeft}mm;
    size: A4;
  }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    a { color: inherit !important; text-decoration: underline; }
  }
  a { color: #000; }
</style>
</head><body>${content}</body></html>`);
		win.document.close();
		win.focus();
		setTimeout(() => {
			win.print();
			win.close();
		}, 400);
	};

	return { print };
}
