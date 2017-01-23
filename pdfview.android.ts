/// <reference path="AndroidPdfViewer.d.ts" />
import * as common from './pdfview.common';
import pdfviewer = com.github.barteksc.pdfviewer;

export class PdfView extends common.PdfView {
	private _android: pdfviewer.PDFView;

	public constructor() {
		super();
	}

	public get android() {
		return this._android;
	}

	public set android(value) {
		this._android = value;
	}

	public loadPDF(src: string) {
		if (!src || !this.android) {
			return;
		}

		if (src.indexOf('://') === -1) {
			src = 'file://' + src;

			const uri = android.net.Uri.parse(src);
			this.android
				.fromUri(uri)
				.load();
		}
	}

	private _createUI() {
		this._android = new pdfviewer.PDFView(this._context, void 0);
		this.loadPDF(this.src);
	}
}
