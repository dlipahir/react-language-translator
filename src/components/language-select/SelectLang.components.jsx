
const SelectLang = ({ languages, selectHandler }) => {
    return (
        <select onChange={selectHandler} className="select">
            {languages.map((obj) => (
                <option key={obj.code} code={obj.code}>
                    {obj.name}
                </option>
            ))}
        </select>
    )
}

export default SelectLang;