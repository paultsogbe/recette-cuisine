import React, { useState, useEffect } from "react";
import "./InputTag.css"

const InputTag = ({setInputsValue}) => {
	const [inputTags, setInputTags] = useState("");
	const tags = ["dessert", "chocolat", "été"];

	const handleChange = (e) => {
		setInputTags(e.target.value);
	};

    const handleClick = (name) => {
        setInputTags(name + " " + inputTags)
    }

    useEffect(() => {
        setInputsValue(i => {
            const newState = {...i}
            newState.tags = inputTags.trim()
            return newState
        })
    }, [inputTags])

	return (
		<div>
			<div className="tagList">
				{tags.map((tag) => (
					<div key={tag} onClick={() => handleClick(tag)} className="tag">{tag}</div>
				))}
			</div>
			<input
				type="text"
				onChange={handleChange}
				value={inputTags}
				name="tags"
				placeholder="Tags"
				required
			/>
		</div>
	);
};

export default InputTag;
