///////////////////////////////////////////////////
// Common.
///////////////////////////////////////////////////

// Injected at compile time, from $npm_package_version.
declare const PACKAGE_VERSION: string;

export const KTX_WRITER: string = `KTX-Parse v${PACKAGE_VERSION}`;

export const NUL: Uint8Array = new Uint8Array([0x00]);

export type vec3 = [number, number, number];
export type vec2 = [number, number, number];

///////////////////////////////////////////////////
// KTX2 Header.
///////////////////////////////////////////////////

export const KTX2_ID: number[] = [
	// '´', 'K', 'T', 'X', '2', '0', 'ª', '\r', '\n', '\x1A', '\n'
	0xab, 0x4b, 0x54, 0x58, 0x20, 0x32, 0x30, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a,
];

export const HEADER_BYTE_LENGTH = 68; // 13 * 4 + 2 * 8
