export const countLengthMixins = {
    filters: {
        filterCountLength: (value) => {
            return value + ` (${value.length})`
        }
    }
}