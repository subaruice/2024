import React from "react";
import MyInput from "./UI/input/MyInput";
import Myselect from "./UI/Select/Myselect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <Myselect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort}) }
                defaultValue="Выберите язык"
                options={[
                    { value: "title", name: "po nazvaniu" },
                    { value: "body", name: "po description" },
                ]}
            />
        </div>
    );
};

export default PostFilter;
