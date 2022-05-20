import React from 'react';
import logo from './logo.svg';
import './App.css';
import HorizontalGridLayout from './components/HorizontalGridLayout';

function App() {
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (
        <div
            style={{
                backgroundColor: 'grey',
                width: '100%'
            }}
        >
            <HorizontalGridLayout
                data={[...new Array(20)?.map((item, index) => index)]}
                renderItem={(index) => {
                    return (
                        <div style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: getRandomColor()
                        }}>
                            <h1>{index}</h1>
                        </div>
                    )
                }}
            />
        </div>
    );
}

export default App;
