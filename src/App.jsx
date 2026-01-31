import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({
    name: "Daksh",
    role: "CSE Student - Y26",
    college: "KLU",
    bio: "Learning React, APIs, and building modern UI projects.",
    github: "https://github.com/opopopxxnot-spec",
    avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUTERMWFhUXGBUXGBcVFRcVFRgVGBcXFxYVFRgYICggGholGxcWITEhJSorLy4vFx8zODMwNygtLisBCgoKDg0OGxAQGy8mHyYtMCswKy0tLy0rLy0tLS0tLy0tLS81LS0tLi0tLS0tLi0tLS0tLS0vLS0tLS01LS0rLf/AABEIAO8A0wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBQYIBAH/xABKEAABAwICBwUFBgIGBwkAAAABAAIDBBEFIQYHEhMxQVEiYXGBkRQyQnKhI1KCkqLRYrEzQ1OywfAVJHPS0+HxCBZEVGODk6PC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EACgRAAIDAAEDBAEEAwAAAAAAAAABAgMREgQhMRMiQVGRMqGx4QVxgf/aAAwDAQACEQMRAD8AnFERAEREAREQBERAEREARCtex/TagonbFXOI3WuAY5CSOrdlp2h3hAbCi0Zut7BT/wCL/wDoqP8AhrOYTpjh9UbU9XC9x+HbAd+V1j9EBnUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBY/EMcpYP6eoij7nyNafQm6xOmmldBRREVsg7QyibcyP8ABrcwO82C5g0uqaaaoMlHSvp4j8LpDJc/ez93wufFATTpjrjdSSbNPTwzxn3JmVIe13UOY1t2nuJUc6V6xqvFIjDLDS7HFtmkyMPVjnG4PgtIhY14scnfzVEtO5vh1H+ckBc/0dJ0HqFS6hkHw+hBXqo8Rtk/1/de9tQw8HD1QHu0Z1kYlQkNZMXxj+qm7bbdBftN8iFMWiGuijqSI6pvsshyuTtQk/Pbs/iFu9QdPA14z9Rx9ViaqiczPi3r+6A7WjkDgC0ggi4INwQeBB6KpcjaH6f12HECCTaivcwydqPvsOLT4EKedXutGmxI7l7dxU2J3ZN2vA4mN1hc/wAJz8bICQEREAREQBERAEREAREQBERAEREAREQBEWna1dKf9HYc+Rh+2k+zi+d3F/4W3PiB1QEFa6MVgqMUkFOxgEX2b3saAZZR77nEe9Y9m5+6tLpKssy4jp+y85JPFfEBk3mF+d9k+h/ZUmRzfia8eOaxyID1umjPFnorMhZ8N/Oy+RROdfZBNgSbC9gOJPQDqqCEB9a4jgSPDJemPEHjib+K8izGj+jVTWO2YIyRzeezG35ncPIZrxtLuz1Jt4jEONz07lcp53Me17CWuaQ5rhkQ4G4IPUFSdHqfO77VUNvoIyWX6Xvf6LQdIcCmopjDOBe1wWm7XN5OaemSjGyMniZOdU4LWjpfVTpsMTpLvsKiKzZQOeXZlA6OsfAg9y3dck6rtJDQYnDJe0byIpRy3byBc/KbO8l1qCplZ9REQBERAEREAREQBERAEREAREQArmnX5jxnxPcA9imaGf8AuPAe8/3G/hK6WXGmmNQZMRq3uNyZ5vo9wH0CAyOgGjIrp3CRxbHG0Ods5OJJs1oJ4cDn3LNQat3z1szYiY6WN+yJH9pziANprBltWNxfh4kLLalIRu6h3MvjHkGuP+KlOFgGQGQWK26UZtI31URlWmyCtYWjdLRPhpqXeSTuBc8uO06xyY0MaLZ9o8L5Be/RjVbNKA+scYWHPYbnMfmvkzzue5S9TYRBHK+Zsbd683dIRtSHkAHHMAAAWGWQV9wsVF9RLMX5JR6aPLX+DUsX0RjZh8lNQxtjdJu2l5zcW7xm2XuOZAbtZeisYNq1oYQDI0zv5mQkNv3MblbxutzRVerLM0u9KG7hh/8AurQf+Tp//ib+yy0UbWtDWgNaOAaAAPADgqkUG2/JNJLwXI7cFEmvOL7SlNvhlF/AsIH1KlhhzWn628I39A5496EiUfLazx6Z/hVtLyaKr47BogULsjQuvM+HUkzvefBEXfNsDa+t1xuF1zqtaRg1Ff8AsWn1JIXSOUbSiIgCIiAIiIAiIgCIiAIiIAiIgC470+ojDilXGeU8h8nOLx9HBdhlc3/9oTCN1iTJwOzURg36vjsx36d2gM7qjiaaISDjcsf3ljnFh8dl9vADot+jdZRvqUcfY578BNceO7btfQBZPGtY0ELjHAx1Q8cdyNpgPQv5nwBXNsi3Y8OpXNKtNm87Y7/RfHEFRzBrWY0/6xTTxjrshwHrsrY8M06w+ewbUMaTwD/szfp27KLrkvKJKyD8Mzxb3r4qwWHgR6oSwc/r+yrLShVBhWKr9KqKA2kqImuHFu23a82i5HosHVazqIXEZklI5RROP1dYKahJ+EQdkV5ZuOyQvFpLI0Uk7nZtEM1+8bDlpdJrUbtkT0sscd8n7JdYdXjK3ldbZv6evpntjkD45GuYSwgkbTbEdxF+BXrg4vujxTU12ZzSuzdE6LcUFLFzjghafEMaD9brlPDNH3jFYqJ4u72lkZy4t2xd/hs9rwXX7bcBy5LqaclrCpERDwIiIAiIgCIiAIiIAiIgCIiAxOkr3CAlvX1yKh7WxCajDRJ8UEjT+F/YdboL7BPgpqxmHahd3Zjy/wCV1HmkVOJaN8QaPtI3tyHcdn62WO5uNqZuoip1OJq2g2GsOCxhwu2R73vFyA7tFtn294WaMjks1HCyJlwGxxttwAa0cgABzJsABmSV81YRXwqnBGVpPTevW07kNc1zWNJb7txfZP3m8gbZX4qib2b3xpor7VrF3w0Kp0jpw/dO3jn3tu9xIXE8xskfRYuXR+grmkxsMTrXuxm6NibbWyRsubfK49Vu2L4DHPLvDvI3bYkO6IaTJs7G2HW2gS3LjbnZZeOlj3ccQhY1kYsw/G0c7O458+RubqacF+lvSLVj/Wk0avoRhDqWN0T53ytv2A4WDABwGZOfp3LL47HeF8bXOY54LQ9vvN6uHfYr2OpGxuBbfMjy8FcnpGvcA69hnbqqW23pckks+CMKPQmipiHzudKXGzGuBdtO6MiYNp59VkKfSClYSyGCbsNLiI4GtAY0hpcRtCwBIF+9SJFTtZIJWxsMgbsBzhdzWXuWsPwg87cbDosLPo5TuqGzOicdklwjLrxAudtOsLZNLsy0GxV3OLXvbbKOM4v2JJHijk2rgtexwFzHKzYeB962Yc3O200kcr3WRwSiazae1jWl9rlrQ0utfM2GfFZuWR8hBeG2BuBYEg9x5L5IMlVLN9vgui5Z7vJHTKEDSfeDLYp98T37G6v45hSRo1Vukn7s/PI8eq11lBsV76h1jvI44gOjWEl3qSMu5bbo1CDK91gNnLLqeforYycpxX1hTOKhCT+9NlREXQOYEREAREQBERAEREAREQBERAUSsu0g8wR6rRHwua7ZI7TDl58R+3kt+Wv4/Qu2t40XBADrcQRwPgs3Uw1avg1dLZxlj+TXcFp2RRCNg2WtL7Dpd7nEeFyVklhcIqS4zscbujmc3hbsuDZGfpeB5LJtfZYn57m9d12L6KgShN6F4MLNZ8PzBXD7/krEh2pGjpmr844EIel1FbbKvplCHmFaokdkqHSFUE9U09wtytvYkZNz8+i2TRinLYi53F5v5f8AW61nRraqoGObnvC5+1yDHPcWfotkt8ijDWho4AAei1dPW+WsydVYuPFfJWiItpgCIiAIiIAiIgCIiAIiIAiIgCIiAjnSSUU+MAOybVwDZ6b2ncQ7z2JG/lC9qxmveJzKOCrj9+mnY6/8LwWkHuJ2QVawvEg+Nj2m7Hta4eBF1h6mGS5HQ6Sex4/RmF8KxmP6QU9EwPqH7IcbNABc5x52A8vVa3NrUoAMt849BGB/NwVEa5S7pGiVkY9mzLtx7dy2cx1vvWuAT1tmPRemu0i2W5AE8AGguK0nBdO6qvxCKKGJrIS7t9jeP2BckvfwbkOXXitn0+dUU9KJKBg3m8btBsQkJYQ7lY87cFN1tNJkFamnJGawqtMrNotLTlxXtUW0WtlzOxVUhDxk7YdsG/yPGXhdesa3qbaH+ry25naZceA5+qOif0F1Ff2SOtY1iYkYqCUM997QwW4gPcGZd5uVmziDDC2Zh2mva1zDyIcLhaniJ39ZQ07jcy1UbnDqyLtuHhkAvKo7NI9tlkGyYdHqLcUkEI/q4omflY1v+CyCIumckIiIAiIgCIiAIiIAiIgCIiAIiIAiIgNf0/wv2rDKmC2bozs3++0hzD+YBQdqz0gbuzSTO2XsJ2NrK7Sbubn8TTfLoe5dDYt/QSfKVy5rPwH2erMrB9lPdwsMhJ8bfM9rzPRU2JSfBl9TcFzRkNZtdHVVlLTxvB2AGOcO0GvkeAfEgBqzFNqsjidtSPMwHLKNpt1Fyfqonppix7XDi0hw8Qbrp6grGzRMlYbtkaHA9xF1TdyrilF9i+jjZJyku5hsLw1rGWa1rByDWgD6L3FkhyLjbvd/m6YjFIyN5pwC+xLWONmuPS/K60DANOa6qqRTsp4w7Pb2i5uwGmzi7wOVuqzKDlrR0JXQi0n/AAbVjui8FU20zA4jg4dl48HD+RyWp4zqwghpZ5mySueyNz2tJbbsi+dhc5AqS4Iebjc/QHuC8uklZHDSTvmNmbt4PeXNLQ0d5JAXtdk00kyq6EJa2v8ApF2gmlzG0wpah4aGEujc45bJzLCeoJJHjbks5q0qvbsfE4H2MDHBl+rgWtNupu8+AUOhdB6nsF9liiLxaSV28ffiLtsxvkPqStsoxhLl8s58JSsjxfhIl9ERXmYIiIAiIgCIiAIiIAiIgCIiAIiIAiLyV+IxQhplkazacGN2jbae42DWjmSgPFj0hLHNHIXK0HSDCo6qF0Mo7LuY4tcPdcO8H/Oa3552r358f29FrGJUpYSOXEHqFn6yDWSXwauinF7F/JzjpFgctHMYpR3tcPde3k4ftyWz6vtPfYxuKgF0BN2luboyeOXNp425KStIsAirqfdyZEZsePeY7qOo6jn9VBukGBTUcu7mbbjsuGbXjq0/4cQkJxtjkhOEqZco+CVsU1rUbB9jHJM7kD9k0eJNz6Ba7Ta1th7nNoIW7Zu8tcWucernWzKje6+KSogl4IS6ixvdJsg1r0Rj2jHK1/8AZ2DrnoH3tbvICjTS3S2evkBk7MbfciBu1veT8Tu8rX1t2hOhUlY4SSAsgBzdwL/4Wf73JFXXX7j12WW+09WrXRQ1EvtEzfsYzcA8JJBmB3tBsT6dVNWHtJey3HaH815IqdkUTY42hrGgNa0cAAs5glIcnn8P7rPFyusWGlqNFT02yJ1wq1jZMQjhjdJK8MY0Xc52TW8rk8h3rIRvBAIIIIuCMwQeBC3yWM5qZUiIvD0IiIAiIgCIiAIiIAiLG4rj9LTC9RURRfO8A+nFAZJFG2Ma58PiB3DZZz3NMTPzSAG3gCo+x7XBiFR2YNimb/ANt/53j+TQpcWRckTnpNpJTUEJmqX7I4NaBd73fdY0Zk/QcTYLnXSTTearxCOscNlsL2mKO99hjXBxBPNzrZny5LXKuqkleXzSPkefikcXOt0BPAdysqSjhCUtOroJmvY17DdrgHA9xFx9F8qqcSNLXf8AQ9VquqnEd9hcIJuYtqI/hPZ/SWrb1Y0pLGRTcXqNWmpXRO2XcOR5H/PRePEaOOZmxMxr2Hi1wuPHuPeFucjA4WIuOhWKrcHuPsz5H/A/uubb0ko94f2dSrrIy7T7fwRrWasKF5uwyx9zXhw/WCfqvMNVFLzmm/QP/wAqQXxObk4EHvXyyz+rYu2mj0q33w1TDNXtBC4O3ZkcOG8cXC/yiwPmFs0QAuALAZAcgF7Keje/gMupyCydHhbWZu7R7+A8ArIU2Wvf3ZXO6qpYvwjxUWGl5Dn5N425u/5LOAL6i6VVMa1iOZddK16zS9bmLbjDJIx707mxD5T2pD+VpHmtQ1V6yBSNFJWk7i/2cvHdX+BwAzjvc3+G/T3bOvDEdqrhgByij2j80h/3Wj1UbKUlpUnh2NBO17Q9jg5rhcOaQWkHmCOKuLkDC8UqKV21TTSQnidhxAJ728D5hb7geumuhAbUxx1A6n7GS3zNBaT+EKtxZYpo6CRR7guuDDprCVz6dx/tWks/Oy4A7zZbzQV8U7NuGRkjfvMcHD1C8wkmelEReHoREQEXYtrso2XFNDLOeRP2LPV13W/CtPxPXRiEmUMcMI8DK71dYfpUbIrVFFLmzO4lpliNR/TVkzgeTXbsekYaFgbZ35nieZ8V9Renmlp/vAK6rTc3FXUPAiIgJW1FYjZ1TTk8diVvl2H/AM2eilxc4avMT9nxKB5Nmudu3eEnZ/vbJ8l0c0qaB9RF4MdxRtLTSzv4RtJt1dwa3zcQPNG8PUm3iI91qaWPbIKSneW7NjM5psdo5tjB4iwzNuo6KOIq+Zrg5ssgcDe+269/VW6modI90khu97i5x6uJuT6lW1zZy5PT6OmpVwUUT7oJpF7dSB7rb1nYlAy7QGTgOjhn6jktjUE6tca9mrmBxtHNaJ/TaJ+zd5Oy/EVOy20z5ROL1dPp2dvD7hEWL0pxP2WhqJ+bI3bP+0d2WfqIVrMpz5ptiPtGI1Mt7gyOa35WdgfRt/NYREUAF8cMl9RAUQnsr0UlS+J+3E90b/vMcWO9Wrywcx3q6gN4wXWticFg6Vs7ekzQT5PbZ3rdb3gmu2mfYVcD4TzdGd8zxtYOHoVBiLxxRJSZ1JDrBwtzQ4VsIBF7OfsO82usQe4ouW0XnA95hERSIBEVEpyKApg5nqrqpjFgFUgCIiA+gkZjiMx48l03o3iftNJDUD+sY0uH8XB4/MCuY1M2o/Fdumlpic4nB7fkfx9HA/mUkCTAtT1kYPNWUm5gd2g4SbJyDw29m35Z5jvAW1WsqWszJPPLyXrSaxkoycWmjmABzXFjwWuBIIIsQRxBB5qtSVrgw6BkbZdgCZ0jWBwyJbYuIcOdgBYqMtjvK59sOEsO9013qw3D3YTh0tRMyGAEvccu4Di8nkBxuuj6Mndt2jtO2QHHhdwFibcs1pGp6mh9iMjGjfF7mSP4uNrFo7hslpsOa3uNliehz/daqIZHfs5nXXOc+OeCtrbqMteeLbNPDTNP9I8yEfwMyF/Fx/SpOJ5Bc760MV9oxOWxu2K0Lfwe8fzFytZjNTREUTwIiIC0MnnvV1WpeIKuoAiIgCIiAIiIAvjm34r6vj3WQH0oqcz3fVGtsgKkREAW16sMW9mxOK5syW8Lunb90/nDfVaovrXEEEGxBBB6EZg+q9B1ivhKxmjOLCro4Zx8bAXDo8ZPHk4Fe+qdZhU13BD2uGs256ePo18hHe4ho+jT6rRVntYNTvMTl6RhkY8mgn6uKwK5972bO/0ceNKJM1K1tnVEPUMlHiLsd9CxSooL1W1W7xOMcpGyR+rdofVgU6LT072Bzevjl2/ZjtIcTFNSTTn+rY5w73Ws0ebiAuYHvLiXONySST1JzJ9VMeu/GNiCKlac5Hbx4/gZ7t/F391Q0rGYgiIvAEuio2OmSAqc26+qguI4/RVoAiIgCIiAIiIAqXtuFUiAoidcKtWxk63VXEAREQBERASxqQxzOWjef/Vi/lI0fpdbxUpVx7PmFzHgmKPpaiKoj96NwdbqPiafFtx5rorGcRb7GZ2X2TE6VvW27Lm39QpxYzTn/Eane1M8n3pHnyLjb6WVlWaUZeivLmN6z6atZFIyOjdTuq2nk+7NFfwLwHfQldHuyvfl/m65ga/ZId0sfTNTVrR0gNPhvYuH1Fo2no1zbyG/XZuB8y09M+zOZ/kl3i/9kP6b437bXSzA3ZfYj/2bMmnzzd+JYJEV5zAiIgCIhKAtvzIHmritxcz1VxAEREAREQH/2Q==",

    // 👇 NEW STATE DATA
    followers: 120,
    projects: 15,
    hobby: "Coding"
  });

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app">
      {/* PROFILE CARD */}
      <div className="profile-card" onClick={() => setShowPopup(true)}>
        <img
          src={profile.avatar}
          alt="Profile"
          className="profile-img"
        />

        <h2>{profile.name}</h2>
        <h4>{profile.role}</h4>
        <p className="college">{profile.college}</p>

        {/* 👇 NEW STATS SECTION */}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{profile.followers}</span>
            <span className="stat-label">Followers</span>
          </div>

          <div className="stat">
            <span className="stat-number">{profile.projects}</span>
            <span className="stat-label">Projects</span>
          </div>

          <div className="stat">
            <span className="stat-number">{profile.hobby}</span>
            <span className="stat-label">Hobby</span>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-bg" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <img src={profile.avatar} alt="Profile" />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>

            <button onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
