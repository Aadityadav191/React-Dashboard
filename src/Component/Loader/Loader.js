import React from 'react'

export default function Loader() {

  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    h3: {
      color: 'rgb(82, 79, 79)',
    },
    ring: {
      width: '190px',
      height: '190px',
      border: '1px solid transparent',
      borderRadius: '50%',
      position: 'absolute',
    },
    rotate1: {
      borderBottom: '8px solid rgb(240, 42, 230)',
      animation: 'rotate1 2s linear infinite',
    },
    rotate2: {
      borderBottom: '8px solid rgb(240, 19, 67)',
      animation: 'rotate2 2s linear infinite',
    },
    rotate3: {
      borderBottom: '8px solid rgb(3, 170, 170)',
      animation: 'rotate3 2s linear infinite',
    },
    rotate4: {
      borderBottom: '8px solid rgb(207, 135, 1)',
      animation: 'rotate4 2s linear infinite',
    },
  };

  return (
    <>

<div style={styles.page}>
      <div style={styles.container}>
        <div style={{ ...styles.ring, ...styles.rotate1 }} />
        <div style={{ ...styles.ring, ...styles.rotate2 }} />
        <div style={{ ...styles.ring, ...styles.rotate3 }} />
        <div style={{ ...styles.ring, ...styles.rotate4 }} />
        <div style={styles.h3}>loading</div>
      </div>

      {/* Keyframes animations are added to the document dynamically */}
      <style>
        {`
          @keyframes rotate1 {
            from {
              transform: rotateX(50deg) rotateZ(110deg);
            }
            to {
              transform: rotateX(50deg) rotateZ(470deg);
            }
          }

          @keyframes rotate2 {
            from {
              transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
            }
            to {
              transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
            }
          }

          @keyframes rotate3 {
            from {
              transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
            }
            to {
              transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
            }
          }

          @keyframes rotate4 {
            from {
              transform: rotateX(70deg) rotateZ(270deg);
            }
            to {
              transform: rotateX(70deg) rotateZ(630deg);
            }
          }
        `}
      </style>
    </div>



      
    </>
  )
}
