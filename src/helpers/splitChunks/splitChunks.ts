export const splitChunks = <T>(sourceArray: T[], chunkSize: number) => {
	if (chunkSize <= 0) throw 'chunkSize must be greater than 0';
	const result = [];
	for (let i = 0; i < sourceArray.length; i += chunkSize) {
		result[i / chunkSize] = sourceArray.slice(i, i + chunkSize);
	}
	return result;
};
