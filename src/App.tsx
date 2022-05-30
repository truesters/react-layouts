import React from 'react';
import { HorizontalGridLayout } from './libs/components/HorizontalGridLayout';

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
            <HorizontalGridLayout
                data={[...new Array(20)?.map((item, index) => index)]}
                renderItem={(item, index) => {
                    const dimension = window.innerHeight / 3;
                    return (
                        <div>
                            <div style={{
                                height: dimension,
                                width: dimension,
                                backgroundColor: getRandomColor(),
                                margin: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <h1>{index}</h1>
                            </div>
                            <div style={{
                                height: dimension,
                                width: dimension,
                                backgroundColor: getRandomColor(),
                                margin: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <h1>{index}</h1>
                            </div>
                        </div>
                    )
                }}
            />
    );
}

export default App;
