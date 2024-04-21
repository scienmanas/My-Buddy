const ProfessionCheckbox = ({ onCheckboxChange, selectedProfession }) => {
	return (
		<div className='flex flex-row flex-wrap gap-2'>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedProfession === "Student" ? "selected" : ""} `}>
					<div className='label-text'>Student</div>
					<div className="profession-checkboxes">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedProfession === "Student"}
							onChange={() => onCheckboxChange("Student")} />
					</div>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedProfession === "Working Professional" ? "selected" : ""}`}>
					<div className='label-text'>Working Professional</div>
					<div className="profession-checkboxes">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedProfession === "Working Professional"}
							onChange={() => onCheckboxChange("Working Professional")} />
					</div>
				</label>
			</div >
		</div >
	);
};
export default ProfessionCheckbox;