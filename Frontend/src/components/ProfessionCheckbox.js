const ProfessionCheckbox = ({onCheckboxChange,selectedProfession}) => {
	return (
		<div className='flex ml-[4px]'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedProfession === "Student" ? "selected" : ""} `}>
					<span className='label-text'>Student</span>
					<input type='checkbox' className='checkbox border-slate-900'
					checked={selectedProfession === "Student"}
					onChange={() => onCheckboxChange("Student")} />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedProfession === "Working Professional" ? "selected" : ""}`}>
					<span className='label-text'>Working Professional</span>
					<input type='checkbox' className='checkbox border-slate-900'
					checked={selectedProfession === "Working Professional"}
					onChange={() => onCheckboxChange("Working Professional")}/>
				</label>
			</div>
		</div>
	);
};
export default ProfessionCheckbox;