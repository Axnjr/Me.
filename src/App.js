import React, { useEffect } from 'react'
import "./images-fonts/App.css"
import About from './About'
import Skills from './Skills'

export default function Home() {
    useEffect(()=>{
        let hey = document.getElementById("heyh1")
        hey.style.transition = "all 3s ease-in-out"
        if(window.innerWidth>'480'){
            hey.style.lineHeight = "1.2"
        }},[])
    const anime = () => {
        if(window.innerWidth>775){
            window.addEventListener("mousemove",(e)=>{
                let w = document.getElementById("heyh1")
                w.style.transition = 'all 1s ease'
                if(e.pageX>456){
                    w.style.marginInline = "3rem"
                }
                if(e.pageX<456){
                    w.style.marginInline = '0rem'
                }
            })
        }else{}
    }
    const showmenu = () => {
        let m = document.getElementById('options')
        let l = document.getElementById('links')
        let c = document.getElementById('close')
        m.style.transition = "all 3s ease"
        l.style.transition = "font-size 3s ease"
        if(window.innerWidth>480){
            l.style.fontSize = "3.5rem"
        }if(window.innerWidth<'480'){l.style.fontSize = "2.5rem";l.style.lineHeight='3'}
        m.style.width = "100%"
        c.style.transition = 'width 3s ease'
        c.style.width = "50px" 
    }
    const closemenu = () => {
        let m = document.getElementById('options')
        let l = document.getElementById('links')
        m.style.transition = "all 3s ease"
        m.style.width = "0%"
        l.style.transition = "all 3s ease";l.style.fontSize = "0rem"}
    return (
        <>  
            <div id='body'>              
                <div style={{position:'absolute',width:'100%',height:'100%'}}>
                    <h1 id='axn'>AXN</h1>
                    <svg onClick={showmenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="50" height='50' id='menu'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5\" />
                    </svg>
                    <h1 id='heyh1' onMouseOver={anime}>" Hey!<br/> I am Axn, a full-stack developer. Nice to meet You "</h1>
                </div>               
            </div>
            <About/>
            <Skills/>
            <div>
                <footer>
                    <h1>Developed and Designed By<br/><span style={{fontSize:'9rem',}}>AXN</span><h4 style={{marginTop:'1rem',textAlign:'center'}}>Not a social media person<br/><br/>
                    <span style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}><a href='https://www.linkedin.com/in/yakshit/'>linkedIn</a>
                        <a href='https://discord.com/channels/@me'>Discord</a> 
                        <a href='https://github.com/Axnjr'>Github</a>
                        <a href='yakshitchhipa@gmail.com'>Gmail</a>
                        <a href='https://drive.google.com/file/d/1B3zIWRuT5md-znpZBzBIqO-igPNZ8RqT/view?usp=sharing'>Resume</a>
                        </span></h4>
                    </h1>
                </footer>
            </div>
            <div id='options'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id='close' onClick={closemenu}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div id='links'>
                    <a href='#about' onClick={closemenu}>A b o u t</a><br/>
                    <a href='#skillmain'onClick={closemenu}>S k i l l s</a><br/>
                    <a href='#exp' onClick={closemenu}>E x p e r i e n c e</a><br/>
                    <a href='#pro' onClick={closemenu}>P r o j e c t s</a><br/>
                    <a href='https://drive.google.com/file/d/1B3zIWRuT5md-znpZBzBIqO-igPNZ8RqT/view?usp=sharing' onClick={closemenu}>R é s u m é</a><br/> 
                </div>
            </div> 
        </>
    )}
