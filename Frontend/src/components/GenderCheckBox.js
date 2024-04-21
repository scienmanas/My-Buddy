const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex flex-row flex-wrap gap-3'>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<div className='label-text'>Male</div>
					<div className="input-boxes-gender">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedGender === "male"}
							onChange={() => onCheckboxChange("male")} />
					</div>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
					<div className='label-text'>Female</div>
					<div className="input-boxes-gender">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedGender === "female"}
							onChange={() => onCheckboxChange("female")} />
					</div>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;