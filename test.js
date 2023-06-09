function groupItems(items, groups) {
    if (groups <= 0 || groups === NaN || !items.length) {
        return [];
    }

    const size = Math.ceil(items.length / groups);
    const contents = [];

    let start = 0;
    let end = size;

    for (let i = 0; i < groups; i++) {
        contents.push(items.slice(start, end));
        start = end;
        end = start + size;
    }

    return contents
}

// DEFINE PARAMS HERE
const ITEMS = [1, 2, 3, 4, 5,];
const GROUPS = 3;

console.log(groupItems(ITEMS, GROUPS));
