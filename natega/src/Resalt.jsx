import React, { useState } from 'react';
import './ResultsPage.css';
import Result from './Result.json';
export default function ResultsPage() {
    const [stage, setStage] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [result, setResult] = useState(null);
    const [noresult, setnoResult] = useState(false);

    const handleStageChange = (e) => {
        setStage(e.target.value);
    };

    const handleRollNumberChange = (e) => {
        setRollNumber(e.target.value);
    };

  
    
    const handleSearch = () => {
        const student = Result.resalt.find(s => s.rollNumber.toString() === rollNumber);
    
        if (student) {
            const subjects = Object.entries(student).filter(([key]) =>
                key !== "rollNumber" && key !== "name" && key !== "GPA" && key !== "كود"
            ).map(([subjectName, grade]) => ({
                name: subjectName,
                grade: grade
            }));

            setResult({
                name: student.name,
                subjects: subjects
            });
            setnoResult(false)

        } else {
            setResult(null); // No result found
            setnoResult(true)
     
        }
    };


    return (
        <div className='resal'>
            <div className="results-page">
                <h1>البحث عن نتائج الطلاب</h1>
                <div className="search-form">
                    <label>
                        اختر المرحلة:
                        <select value={stage} onChange={handleStageChange}>
                            <option value="">اختر المرحلة</option>
                            <option value="1">الاولي نظم</option>
                            <option value="2">الثانية نظم</option>
                            <option value="3">الثالثة نظم</option>
                            <option value="4">الرابعة نظم</option>
                            <option value="5">الاولي محاسبة</option>
                            <option value="6">الثانية محاسبة</option>
                            <option value="7">الثالثة محاسبة</option>
                            <option value="8">الرابعة محاسبة</option>
                        </select>
                    </label>
                    <label>
                        أدخل رقم الجلوس:
                        <input
                            type="text"
                            value={rollNumber}
                            onChange={handleRollNumberChange}
                            placeholder="أدخل رقم الجلوس"
                        />
                    </label>
                    <button onClick={handleSearch}>ابحث</button>
                    {noresult && <p> No result found</p>}
                </div>

                {result && (
                    <div className="result-table">
                        <h2>النتيجة</h2>
                        <p>اسم الطالب: {result.name}</p>
                        <table border={2}>
                            <thead>
                                <tr>
                                    <th>المادة</th>
                                    <th>الدرجة</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.subjects.map((subject, index) => (
                                    <tr key={index}>
                                        <td>{subject.name}</td>
                                        <td>{subject.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
