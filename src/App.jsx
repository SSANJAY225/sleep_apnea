import { useState } from 'react';
import Axios from 'axios';
import './App.css';


const App = () => {
    const [Age, setAge] = useState('');
    const [Gender, setGender] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [SleepDuration, setSleepDuration] = useState('');
    const [QualityOfSleep, setQualityOfSleep] = useState('');
    const [StressLevel, setStressLevel] = useState('');
    const [BMICatagory, setBMICatagory] = useState('');
    const [HeartRate, setHeartRate] = useState('');
    const [DailySteps, setDailySteps] = useState('');
    const [BloodPressure, setBloodPressure] = useState('');
    const [PhysicalActivity, setPhysicalActivity] = useState('');
    const [Output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const gender = (Gender.toUpperCase() === 'MALE') ? 0 : 1;
        const bp = BloodPressure.split('/');
        const Systolic = bp[0];
        const Diastolic = bp[1];

        setIsLoading(true);

        Axios.post("http://127.0.0.1:5000/sleep", {
            Age,
            gender,
            Occupation,
            SleepDuration,
            QualityOfSleep,
            PhysicalActivity,
            StressLevel,
            BMICatagory,
            HeartRate,
            DailySteps,
            Systolic,
            Diastolic
        }).then((response,req) => {
            console.log(req)
            console.log(response.data.result);
            setOutput(response.data.result);
        }).catch((error) => {
            console.log("Error: " + error);
        }).finally(() => {
            setIsLoading(false);
            // Clear form fields
            // setAge('');
            // setOccupation('');
            // setGender('');
            // setSleepDuration('');
            // setQualityOfSleep('');
            // setBloodPressure('');
            // setDailySteps('');
            // setHeartRate('');
            // setBMICategory('');
            // setStressLevel('');
            // setPhysicalActivity('');
        });
    };

    return (
        <>
        <div className="container">
            <div className="card mx-auto mt-5" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Sleep Apnea Evaluation</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="gender" value="MALE" checked={Gender == 'MALE'} onChange={(e) => setGender(e.target.value)} />
                                            Male
                                        </label>
                                        <label style={{ marginLeft: '10px' }}>
                                            <input type="radio" name="gender" value="FEMALE" checked={Gender == 'FEMALE'} onChange={(e) => setGender(e.target.value)} />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Age">Age</label>
                                    <input value={Age} onChange={(e) => setAge(e.target.value)} id="Age" className="form-control-input" placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Occupation">Occupation</label>
                                    <input value={Occupation} onChange={(e) => setOccupation(e.target.value)} id="Occupation" className="form-control-input" placeholder="Occupation" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="SleepDuration">Sleep Duration</label>
                                    <input value={SleepDuration} onChange={(e) => setSleepDuration(e.target.value)} id="SleepDuration" className="form-control-input" placeholder="Sleep Duration" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="QualityOfSleep">Quality of Sleep</label>
                                    <input value={QualityOfSleep} onChange={(e) => setQualityOfSleep(e.target.value)} id="QualityOfSleep" className="form-control-input" placeholder="Quality of Sleep" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="PhysicalActivity">Physical Activity</label>
                                    <input value={PhysicalActivity} onChange={(e) => setPhysicalActivity(e.target.value)} id="PhysicalActivity" className="form-control-input" placeholder="Physical Activity" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="StressLevel">Stress Level</label>
                                    <input value={StressLevel} onChange={(e) => setStressLevel(e.target.value)} id="StressLevel" className="form-control-input" placeholder="Stress Level" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="BMICategory">BMI Category</label>
                                    <input value={BMICatagory} onChange={(e) => setBMICatagory(e.target.value)} id="BMICategory" className="form-control-input" placeholder="BMI Category" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="HeartRate">Heart Rate</label>
                                    <input value={HeartRate} onChange={(e) => setHeartRate(e.target.value)} id="HeartRate" className="form-control-input" placeholder="Heart Rate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="DailySteps">Daily Steps</label>
                                    <input value={DailySteps} onChange={(e) => setDailySteps(e.target.value)} id="DailySteps" className="form-control-input" placeholder="Daily Steps" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="BloodPressure">Blood Pressure</label>
                                    <input value={BloodPressure} onChange={(e) => setBloodPressure(e.target.value)} id="BloodPressure" className="form-control-input" placeholder="Blood Pressure" />
                                </div>
                            </div>
                        </div> <br />
                        <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                        {isLoading ? <p className="text-center mt-2">Loading...</p> : <p className="text-center mt-2">{Output}</p>}
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default App;
