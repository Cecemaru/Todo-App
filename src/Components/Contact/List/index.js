import React, { useState } from "react";

function Lists() {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);

	function addItem() {
		if (!newItem) {
			alert("enter an item");
			return;
		}

		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem,
		};
		setItems((oldItems) => [...oldItems, item]);
		setNewItem("");
	}

	function deleteItem(id) {
		const newArray = items.filter((item) => item.id !== id);
		setItems(newArray);
	}

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addItem();
				}}
			>
				<input
					type="text"
					placeholder="add an item"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
			</form>
			<button onClick={() => addItem()}>Add</button>

			<ul>
				{items.map((item) => {
					return (
						<li key={item.id}>
							{item.value}
							<button onClick={(e) => deleteItem(item.id)}>X</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Lists;
