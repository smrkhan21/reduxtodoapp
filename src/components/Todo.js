import React, { useState, useEffect } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './todo.css';

function Todo() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list)
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>
                            Add Your List Here
                        </figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='Add Items'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className='fa fa-plus add-btn' onClick={() => (dispatch(addTodo(inputData)), setInputData(''))}></i>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <i className='fa fa-trash add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        list.length > 0 && <div onClick={() => dispatch(removeTodo())} className='showItems' style={{textAlign:"center !important"}}>
                                    <div className='eachItem'>
                                        <h3>Remove All</h3>
                                    </div>
                                </div>
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Todo;
