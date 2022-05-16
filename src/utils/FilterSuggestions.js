
const FilterSuggestions = (data = 0) => {
    return data?.results?.filter((item) => {
        return item?.tags[1]?.title || item?.tags[0]?.title;
    }).map((item) => item?.tags[1]?.title || item?.tags[0]?.title).filter((value, index, self) => { return self.indexOf(value) === index })
}

export default FilterSuggestions;