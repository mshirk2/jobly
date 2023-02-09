import React, {useState} from "react";

function SearchForm({searchFor}){
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e) {
        e.persist();
        setSearchTerm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchFor(searchTerm || undefined);
        setSearchTerm(searchTerm);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="searchTerm"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <input
                    type="Submit"
                    value="Search"
                    readOnly
                />
            </form>
        </div>
    )
}

export default SearchForm;