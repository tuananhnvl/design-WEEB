import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshSurfaceSampler } from './Hook/MeshSurfaceSampler.js';
import Footer from "./component/Footer.js";
import svgdemo from "./asset/svgdemo.png";
import "./styles/AboutUs.css";
import "./styles/svg404.css";

function Page404() {
  /* //check DOM 
    var lastelem;
  
  window.onmouseover = function (e) { 
          var event = e || window.event;
  
          if (lastelem) {
                    lastelem.style.border = "0px solid #fff";
            }
            
            const chckBox = event.target;
            
          
        
            //console.log(`${chckBox.id}`);
            const trt5 = chckBox.querySelector('#jygt67');
            console.log(`${trt5.id}`);
            const g45fd2 = trt5.id;
            const tfdsfrt5 = "jygt67";
            
            if( g45fd2 === tfdsfrt5 ) {
            
                trt5.className += "moveicon";
                console.log(`${trt5.className}`);
            
            }
        
            
          else{
           
        }
          ; 
          // ĐÃ ACTIVE , DI CHUỘT GET INDO dom
         
  }; */
  /* CONFIG LOAING LAZY */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  const mountRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
    //CONFIG SCENE 
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(/* window.innerWidth */ 600, /* window.innerHeight */ 300);
    mountRef.current.appendChild(renderer.domElement);
    new OrbitControls(camera, renderer.domElement);
    // CREAT OBJ
    const group = new THREE.Group();                                      // NHÓM GEO VÀ MAR
    const geometry = new THREE.SphereGeometry( 10, 32, 16 );              // TYPE OBJ

   /*  const t45t = require('./asset/map8k.jpg');     
    const t23445t = require('./asset/globalbump.jpg');      
    const t2wr5t = require('./asset/globalcloud.jpg');  
    const mapglobal = new THREE.TextureLoader().load(t45t);  
    const globalbump = new THREE.TextureLoader().load(t23445t);  
    const globalcloud = new THREE.TextureLoader().load(t2wr5t);  
    const ObjType = new THREE.Mesh(new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshPhongMaterial({
      map: mapglobal,
      bumpMap: globalbump,
      bumpScale:   0.005,
      specularMap: globalcloud,
      specular: new THREE.Color('grey')}));
    

    var light = new THREE.AmbientLight(0x333333,0.2);
    light.position.set(5,3,5);
    light.intensity = 6; */

     const ObjType = new THREE.Mesh(geometry);     
    const ObjTypeMeshSur = new MeshSurfaceSampler(ObjType).build();            // MeshSurfaceSampler BUILD POINT IN SURFACE

    const JsonChildPosition00 = [];
    const JsonChildPosition01 = [];
    const JsonChildPosition02 = [];
    const ObjChildPosition = new THREE.Vector3();

    for (let i = 0; i < 5000; i ++) {
    
      ObjTypeMeshSur.sample(ObjChildPosition);
     

      JsonChildPosition00.push(ObjChildPosition.x, ObjChildPosition.y, ObjChildPosition.z);
    }

    for (let i = 0; i < 4; i ++) {
     
      ObjTypeMeshSur.sample(ObjChildPosition);
      JsonChildPosition01.push(ObjChildPosition.x, ObjChildPosition.y, ObjChildPosition.z);
    }

    for (let i = 0; i < 4; i ++) {
      
      ObjTypeMeshSur.sample(ObjChildPosition);
      JsonChildPosition02.push(ObjChildPosition.x, ObjChildPosition.y, ObjChildPosition.z);
    }

    const pointsGeometry00 = new THREE.BufferGeometry();
    pointsGeometry00.setAttribute('position', new THREE.Float32BufferAttribute(JsonChildPosition00, 4));       

    const pointsGeometry01 = new THREE.BufferGeometry();
    pointsGeometry01.setAttribute('position', new THREE.Float32BufferAttribute(JsonChildPosition01, 3));       

    const pointsGeometry02 = new THREE.BufferGeometry();
    pointsGeometry02.setAttribute('position', new THREE.Float32BufferAttribute(JsonChildPosition02, 3));    



    const star = require('./asset/Star.png');  
    const logoreact = require('./asset/logo512.png');                                          // SET MAR FOR POINT
    const logodemo = require('./asset/datalogo/1.png');      
    const starpic = new THREE.TextureLoader().load(star);                                    // SET MAR FOR POINT
    const logodemopic = new THREE.TextureLoader().load(logodemo);
    const logoreactpic = new THREE.TextureLoader().load(logoreact);

   
    const pointsMaterial00 = new THREE.PointsMaterial(
      { map:starpic,size:0.25,transparent:true},
    );
    const pointsMaterial01 = new THREE.PointsMaterial(
      { map:logoreactpic,size:5},
    );
    const pointsMaterial02 = new THREE.PointsMaterial(
      { map:logodemopic,size:5},
    );
    const Points00 = new THREE.Points(pointsGeometry00, pointsMaterial00);
    const Points01 = new THREE.Points(pointsGeometry01, pointsMaterial01);
    const Points02 = new THREE.Points(pointsGeometry02, pointsMaterial02);
    // ADD POINT TO GROUP
    group.add(Points01,Points02,Points00); 
   
    
    // ADD GROUP TO SECNE
    scene.add(group);
  
    //scene.add(light);

    camera.position.set(0, 0, 10);      // CAMERA SETTING POSITION

    // MOVE
    var FunctMove = function() {
       ObjType.rotation.x += 0.0005;
       ObjType.rotation.y += 0.0005;
    };

    // RENDER
    var RenderSceneAndCamera = function() {
      renderer.render(scene, camera);
    };

    // TASK FUNCTION 
    var ActionThreeJs = function() {
      requestAnimationFrame(ActionThreeJs);
      FunctMove();
      RenderSceneAndCamera();
    };

    ActionThreeJs();
// SCENE BACKGOURND
scene.background = new THREE.Color( 'black' );


// orbit control:

      
      return () => mountRef.current.removeChild( renderer.domElement);
    }, 1700);
  }, []);

  return (
    <>
     
      {isLoading &&
        <div className="LoadingPageFC" >
          <div className="wheel-and-hamster" role="img" aria-label="Orange and tan hamster running in a metal wheel">
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
      }
      {!isLoading && (
        <div>
          <div className="page404" >
            <svg className="o89yh654" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 600">
              <g id="ghost404" >
                <path id="shadowbody" className="clss-1" d="M117.64,568.41c48.07,0,87-3.58,87-8s-39-8-87-8-87,3.58-87,8S69.58,568.41,117.64,568.41Z" />
                <g id="body">
                  <path className="clss-2" d="M216.42,304.47,212,295.82l5-13.32,6.62-6.71c-.08-11.62-.23-22.79-.83-34.38q-.33-6.54-.78-13.08c-4.31-68.39-70.23-108-120.31-92.45C51.4,151.2,34.26,199.89,40,248c.39,3.24.74,6.47,1.07,9.71Q43,276.3,43.69,295C-25,367.62,2.31,386.65,25,364.09c6-6,12.37-12.1,18.63-18a634.58,634.58,0,0,1-8.32,78.58c-.08.53-.18,1.05-.26,1.57a18.94,18.94,0,0,0,13.56,21.38c9.22,2.39,18.1-3.5,20-13.79.09-.43.16-.87.24-1.3s.17-1,.26-1.48c1.82-10.23,11.08-17.7,20.59-15.93l.16,0c9.49,1.77,15.84,12.86,13.75,23.86-.09.51-.2,1-.29,1.56s-.18.91-.27,1.38c-2.07,10.82,3.44,21.16,12.55,23.87s18.33-4.13,20.68-15.71l.3-1.46c.11-.55.22-1.11.32-1.66,2.28-11.51,11.78-19.34,21.21-17.42s15.55,13.64,13,26c-.13.59-.24,1.17-.37,1.75s-.22,1-.33,1.55c-2.57,12.19,2.16,24.16,11.22,27s18.79-5.26,21.68-18.25c.16-.7.31-1.39.47-2.09a857.35,857.35,0,0,0,19.7-158.15Z" />
                </g>
                <g id="bodypart" >
                  <path id="handpart" className="clss-2" d="M223.42,306.38c20.81-2.54,41.48-6.1,45.53-12.52a7.64,7.64,0,0,0-.81-9.36h0c-2.44-2.47-6-3.47-9.34-4.27a180.57,180.57,0,0,0-35-4.73l-3.79-.3h-7.79l-10.83,9L200,290.8v9.67l2.65,3.52,8.12,4.74h4.76l5.12-.85,2.64-1Z" />
                </g>
                <g id="pincontent">
                  <g id="lightpin">
                    <path id="light02" className="clss-3" d="M700.77,338.47,331.9,292.14l-33.08-3.56L599.55,46.75Z" />
                    <path id="light01" className="clss-4" d="M717.35,339.25c93.63,0,169.55-75.93,169.55-169.62S811,0,717.37,0,547.82,75.94,547.81,169.62,623.71,339.25,717.35,339.25Z" />
                  </g>
                  <g id="text404">
                    <path className="clss-5" d="M654.63,81.37l-25.94,48.32,24.44-.21-.28-18.76,12.5-.11.28,18.76,11.7-.1.11,12-11.82.1.17,19.56-12.5.11-.17-19.56-38.75.34-.09-10,27.4-50.39Z" />
                    <path className="clss-5" d="M745.44,120.38c.23,25.92-10.33,40.34-29.53,40.5s-30.13-14-30.36-40,10.33-40.22,29.65-40.39S745.21,94.57,745.44,120.38Zm-46.59.41c.17,20.24,5.82,29.73,17,29.63s16.5-9.69,16.32-29.93S726.32,90.86,715.29,91,698.67,100.55,698.85,120.79Z" />
                    <path className="clss-5" d="M794.86,80.14l-26,48.32,24.44-.21-.28-18.76,12.5-.11.28,18.76,11.7-.11.11,12.06-11.82.1.17,19.56-12.5.11-.17-19.56-38.75.34-.09-10,27.4-50.38Z" />
                    <path className="clss-5" d="M614.06,198.47c.05,5.71-3.92,9.64-9.73,9.69s-9.88-3.82-9.93-9.51,3.93-9.57,9.76-9.62S614,192.8,614.06,198.47Zm-15.58.21c0,3.65,2.43,6.11,5.83,6.08s5.72-2.53,5.68-6.18-2.42-6.1-5.78-6.07S598.45,195.07,598.48,198.68Z" />
                    <path className="clss-5" d="M636.2,198.28c0,5.7-3.92,9.63-9.73,9.68s-9.88-3.81-9.93-9.51,3.92-9.57,9.76-9.62S636.15,192.61,636.2,198.28Zm-15.58.21c0,3.65,2.43,6.11,5.83,6.08s5.71-2.53,5.68-6.18-2.42-6.11-5.79-6.08S620.59,194.87,620.62,198.49Z" />
                    <path className="clss-5" d="M660.29,198.17c.05,5.63-3.46,9.53-8.85,9.57a7.4,7.4,0,0,1-6.69-3.33l.09,10.13-4.07,0-.23-25.73,4.07,0,0,3.26a7.37,7.37,0,0,1,6.56-3.46c5.34,0,9,3.83,9.08,9.56Zm-4.11-.1c0-3.51-2.43-6.07-5.79-6s-5.71,2.6-5.68,6.14,2.42,6.15,5.78,6.12S656.21,201.69,656.18,198.07Z" />
                    <path className="clss-5" d="M669.79,191.67c-1.59,0-2.75.55-2.74,1.9,0,3.47,10,1.5,10.05,8.35,0,3.86-3.38,5.63-7.17,5.66a11.64,11.64,0,0,1-7.6-2.56l1.43-2.91a10.25,10.25,0,0,0,6.32,2.28c1.74,0,3.08-.62,3.06-2,0-3.86-9.93-1.61-9.95-8.41,0-3.83,3.29-5.48,6.89-5.51a11.79,11.79,0,0,1,6.6,1.85l-1.45,3a11.08,11.08,0,0,0-5.44-1.62Z" />
                    <path className="clss-5" d="M684.32,205.26a2.24,2.24,0,1,1-4.47,0,2.24,2.24,0,1,1,4.47,0Z" />
                    <path className="clss-5" d="M692.05,205.19a2.24,2.24,0,1,1-4.47,0,2.18,2.18,0,0,1,2.21-2.32A2.2,2.2,0,0,1,692.05,205.19Z" />
                    <path className="clss-5" d="M699.77,205.13a2.24,2.24,0,1,1-4.47,0,2.17,2.17,0,0,1,2.21-2.32A2.22,2.22,0,0,1,699.77,205.13Z" />
                    <path className="clss-5" d="M722.34,195.25l.11,11.73-4.07,0-.09-10.6a4.2,4.2,0,0,0-4.58-4.53,5.27,5.27,0,0,0-5.3,5.18l.09,10-4.07,0-.16-18.85,4.07,0,0,3.62c1.32-2.64,3.72-3.79,6.9-3.82,4.4,0,7,2.7,7.07,7.21Z" />
                    <path className="clss-5" d="M745.71,197.32c0,5.7-3.93,9.63-9.74,9.68s-9.87-3.82-9.92-9.51,3.91-9.57,9.75-9.62S745.66,191.64,745.71,197.32Zm-15.58.21c0,3.65,2.42,6.1,5.82,6.07s5.72-2.52,5.69-6.17-2.43-6.11-5.8-6.08S730.1,193.91,730.13,197.53Z" />
                    <path className="clss-5" d="M760.69,205.43a9.06,9.06,0,0,1-4.63,1.43c-2.83,0-5.29-1.59-5.33-5.45l-.08-9.78-2.65,0,0-3,2.65,0,0-5.17,4,0,0,5.18,5.57-.05,0,3.05-5.57,0,.08,9c0,2,.77,2.55,2.05,2.54a6.59,6.59,0,0,0,2.82-.84l1.06,3.11Z" />
                    <path className="clss-5" d="M782.58,194.73l.11,11.72-4.07,0-.1-10.6a4.19,4.19,0,0,0-4.57-4.53c-3.35.06-5.36,2.6-5.33,5.94l.08,9.28-4.06,0-.23-26.29,4.06,0,.1,11.13c1.32-2.67,3.72-3.86,6.94-3.89C779.91,187.48,782.55,190.22,782.58,194.73Z" />
                    <path className="clss-5" d="M792.32,182.13a2.37,2.37,0,1,1-4.74,0,2.37,2.37,0,0,1,2.35-2.46A2.34,2.34,0,0,1,792.32,182.13Zm-.31,5.39.17,18.85-4,0L788,187.56Z" />
                    <path className="clss-5" d="M816.13,194.43l.11,11.73-4.07,0-.1-10.59a4.19,4.19,0,0,0-4.57-4.53,5.27,5.27,0,0,0-5.3,5.18l.09,10-4.07,0-.17-18.85,4.07,0,0,3.62c1.33-2.64,3.72-3.79,6.91-3.81,4.39,0,7,2.7,7.07,7.2Z" />
                    <path className="clss-5" d="M838.52,187.1l.15,17c.05,5.42-3.78,8.86-9.69,8.91a13.69,13.69,0,0,1-7.84-2.41l1.71-3a9.55,9.55,0,0,0,5.93,2c3.57,0,5.89-2.14,5.86-5.4l0-2.38a6.85,6.85,0,0,1-6.2,3.24c-5.1.05-8.52-3.6-8.57-9s3.28-9,8.28-9a7,7,0,0,1,6.4,3.13l0-3,4,0Zm-4,9c0-3.4-2.28-5.76-5.46-5.73s-5.43,2.45-5.45,5.83,2.29,5.79,5.55,5.76S834.59,199.48,834.56,196.07Z" />
                    <path className="clss-5" d="M629.89,249.11a9,9,0,0,1-4.63,1.42c-2.83,0-5.29-1.59-5.33-5.45l-.08-9.77-2.66,0,0-3.05,2.66,0-.05-5.18,4,0,.05,5.17,5.56-.05,0,3.05-5.57.05.08,9c0,1.95.77,2.54,2,2.53a6.6,6.6,0,0,0,2.83-.83l1.06,3.11Z" />
                    <path className="clss-5" d="M651.24,240.66c0,5.71-3.93,9.64-9.73,9.69s-9.88-3.82-9.93-9.51,3.92-9.57,9.76-9.62S651.19,235,651.24,240.66Zm-15.58.21c0,3.65,2.42,6.11,5.83,6.08s5.71-2.53,5.68-6.18-2.43-6.1-5.79-6.07S635.62,237.26,635.66,240.87Z" />
                    <path className="clss-5" d="M671.37,234.18c-1.6,0-2.76.55-2.75,1.9,0,3.47,10,1.5,10.06,8.35,0,3.86-3.39,5.63-7.17,5.66a11.56,11.56,0,0,1-7.61-2.56l1.43-2.91a10.33,10.33,0,0,0,6.33,2.29c1.74,0,3.07-.63,3.06-2,0-3.86-9.94-1.62-10-8.42,0-3.83,3.28-5.48,6.89-5.51a11.9,11.9,0,0,1,6.6,1.85l-1.46,3a11.15,11.15,0,0,0-5.43-1.62Z" />
                    <path className="clss-5" d="M699.35,241.83l-14.23.13a5.73,5.73,0,0,0,5.88,4.66,7.29,7.29,0,0,0,5.29-2.24l2.19,2.28a10.22,10.22,0,0,1-7.77,3.25c-5.8.06-9.67-3.77-9.72-9.45a9.17,9.17,0,0,1,9.45-9.68C697.06,230.73,699.8,235,699.35,241.83Zm-3.57-2.94c-.16-3-2.2-4.87-5.28-4.85A5.27,5.27,0,0,0,685,239Z" />
                    <path className="clss-5" d="M720.17,241.65l-14.23.13a5.74,5.74,0,0,0,5.88,4.66,7.33,7.33,0,0,0,5.29-2.24l2.18,2.28a10.22,10.22,0,0,1-7.76,3.25c-5.81.05-9.67-3.77-9.72-9.45a9.17,9.17,0,0,1,9.45-9.68C717.88,230.54,720.62,234.84,720.17,241.65Zm-3.57-2.94a4.83,4.83,0,0,0-5.28-4.85,5.27,5.27,0,0,0-5.48,4.94Z" />
                    <path className="clss-5" d="M753.26,237.5l.1,11.73-4.07,0-.09-10.6a4.19,4.19,0,0,0-4.58-4.52c-3.36.06-5.36,2.6-5.33,5.93l.08,9.28-4.07,0-.23-26.3,4.07,0,.1,11.12c1.33-2.67,3.72-3.86,7-3.89C750.58,230.26,753.22,233,753.26,237.5Z" />
                    <path className="clss-5" d="M775.31,241.17l-14.23.12A5.71,5.71,0,0,0,767,246a7.27,7.27,0,0,0,5.29-2.24l2.18,2.28a10.19,10.19,0,0,1-7.76,3.26c-5.81.05-9.66-3.78-9.71-9.45a9.16,9.16,0,0,1,9.44-9.68C773,230.06,775.75,234.36,775.31,241.17Zm-3.56-2.95a4.84,4.84,0,0,0-5.29-4.84,5.26,5.26,0,0,0-5.48,4.94Z" />
                    <path className="clss-5" d="M790.05,229.92l0,3.9c-3.78-.18-6.18,2.07-6.47,5.3l.09,9.85-4.07,0-.16-18.85,4.07,0,0,3.76A6.85,6.85,0,0,1,790.05,229.92Z" />
                    <path className="clss-5" d="M810.1,240.86l-14.24.13a5.74,5.74,0,0,0,5.88,4.66,7.36,7.36,0,0,0,5.3-2.24l2.18,2.28a10.23,10.23,0,0,1-7.76,3.25c-5.81.05-9.67-3.77-9.72-9.45a9.16,9.16,0,0,1,9.44-9.68C807.8,229.75,810.54,234.05,810.1,240.86Zm-3.58-2.94c-.15-3-2.2-4.88-5.28-4.85a5.26,5.26,0,0,0-5.47,4.94Z" />
                    <path className="clss-5" d="M817.47,246.61a2.24,2.24,0,1,1-4.47,0,2.24,2.24,0,1,1,4.47,0Z" />
                  </g>
                  <g id="pin">
                    <path className="clss-6" d="M241.42,297.64l-1.61-10.9a1.79,1.79,0,0,1,1.37-2L326,265.55a1.79,1.79,0,0,1,2.16,1.48l3.43,23.22a1.78,1.78,0,0,1-1.62,2l-86.68,6.86a1.79,1.79,0,0,1-1.91-1.52Z" />
                    <path className="clss-7" d="M279.83,289l-.45-3a.64.64,0,0,1,.5-.72l10.32-2.16a.63.63,0,0,1,.76.53l.61,4.12a.64.64,0,0,1-.57.73l-10.48,1a.64.64,0,0,1-.69-.54Z" />
                    <path className="clss-7" d="M330,293.22c-5.44.8-10.81-4.94-12-12.84s2.31-14.95,7.75-15.75,10.81,4.94,12,12.84S335.45,292.41,330,293.22Z" />
                    <path className="clss-8" d="M331.77,292.16c-4.42.66-8.89-4.87-10-12.33s1.59-14,6-14.69,8.89,4.87,10,12.33S336.18,291.51,331.77,292.16Z" />
                    <path id="fingertouch" className="clss-2" d="M233.11,287.42a34.4,34.4,0,0,0,7.54,5.08c2.78,1.36,5.91,2.36,8.92,1.71s5.76-3.38,5.46-6.46c-.34-3.75-4.46-5.76-8-7.06l-13.94,6.74Z" />
                  </g>
                </g>
                <path id="eye01" className="clss-9" d="M148.32,238.18c1.58,9.76-2,19.72-9.95,22.95S120.22,257,118,243.8s5-24.18,13.46-24S146.62,228.44,148.32,238.18Z" />
                <path id="eye02" className="clss-9" d="M201,222.84c1.58,9.77-2,19.72-10,22.95s-18.14-4.14-20.4-17.33,5-24.17,13.46-24S199.3,213.11,201,222.84Z" />
              </g>
            </svg>
          </div>
          <div ref={mountRef} ></div>
          <Footer />
        </div>
      )}
    </>


  );
};
export default Page404;