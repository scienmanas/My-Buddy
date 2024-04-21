const SalaryCheckbox = ({ onCheckboxChange, selectedsalary }) => {
	return (
		<div className='flex gap-2 flex-row flex-wrap'>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedsalary === "Not Working Currently" ? "selected" : ""} `}>
					<div className='label-text'>Not Working Currently</div>
					<div className="salary-checkboxes-form">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedsalary === "Not Working Currently"}
							onChange={() => onCheckboxChange("Not Working Currently")} />
					</div>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedsalary === "Basic Earning" ? "selected" : ""}`}>
					<div className='label-text'>Basic Earning</div>
					<div className="salary-checkboxes-form">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedsalary === "Basic Earning"}
							onChange={() => onCheckboxChange("Basic Earning")} />
					</div>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label flex flex-row gap-2 cursor-pointer ${selectedsalary === "Handsome Earning" ? "selected" : ""}`}>
					<div className='label-text'>Handsome Earning</div>
					<div className="salary-checkboxes-form">
						<input type='checkbox' className='checkbox border-slate-900'
							checked={selectedsalary === "Handsome Earning"}
							onChange={() => onCheckboxChange("Handsome Earning")} />
					</div>
				</label>
			</div>
		</div>
	);
};
export default SalaryCheckbox