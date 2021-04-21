import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [satisfactionLevel, setSatisfactionLevel] = useState(5);





    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            company: company,
            description: description,
            satisfactionLevel: parseInt(satisfactionLevel)
        }

        console.log(data);

        fetch('https://ancient-crag-54960.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('Review Submitted created successfully.');
                }
            })

    }



    return (


        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-start">

                    <div className="m-5 p-5 service-card">
                        <h2>Submit Your Review</h2>
                        <form >
                            <div class="mb-3">
                                <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Your Name" required></input>

                            </div>
                            <div class="mb-3">
                                <input onChange={(e) => setCompany(e.target.value)} type="text" class="form-control " placeholder="Company Name" required></input>
                            </div>
                            <div class="mb-3">
                                <textarea onChange={(e) => setDescription(e.target.value)} type="text" class="form-control" placeholder="Description" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label>Satisfaction level</label>
                                <select onChange={(e) => setSatisfactionLevel(e.target.value)} class="form-select">
                                    <option selected value="5">Select Level</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button onClick={(e) => onSubmit(e)} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>





                </div>
            </div>
        </section>


    );
};

export default AddReview;