const SalaryCheckbox = ({onCheckboxChange,selectedsalary}) => {
	return (
		<div className='flex ml-[4px]'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedsalary === "Not Working Currently" ? "selected" : ""} `}>
					<span className='label-text'>Not Working Currently</span>
					<input type='checkbox' className='checkbox border-slate-900'
					checked={selectedsalary === "Not Working Currently"}
					onChange={() => onCheckboxChange("Not Working Currently")} />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedsalary === "Basic Earning" ? "selected" : ""}`}>
					<span className='label-text'>Basic Earning</span>
					<input type='checkbox' className='checkbox border-slate-900'
					checked={selectedsalary === "Basic Earning"}
					onChange={() => onCheckboxChange("Basic Earning")}/>
				</label>
			</div>
            <div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedsalary === "Handsome Earning" ? "selected" : ""}`}>
					<span className='label-text'>Handsome Earning</span>
					<input type='checkbox' className='checkbox border-slate-900'
					checked={selectedsalary === "Handsome Earning"}
					onChange={() => onCheckboxChange("Handsome Earning")}/>
				</label>
			</div>
		</div>
	);
};
export default SalaryCheckbox