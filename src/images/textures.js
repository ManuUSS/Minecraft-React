import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';
import { greenImg, grassImg, logImg, stoneImg, glassImg } from '.';

const groundTexture = new TextureLoader().load( greenImg );
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

const grassTexture = new TextureLoader().load( grassImg );
grassTexture.wrapS = RepeatWrapping;
grassTexture.wrapT = RepeatWrapping;
grassTexture.magFilter = NearestFilter;

const glassTexture = new TextureLoader().load( glassImg );
glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;
glassTexture.magFilter = NearestFilter;

const logTexture = new TextureLoader().load( logImg   );
logTexture.wrapS = RepeatWrapping;
logTexture.wrapT = RepeatWrapping;
logTexture.magFilter = NearestFilter;

const stoneTexture = new TextureLoader().load( stoneImg );
stoneTexture.wrapS = RepeatWrapping;
stoneTexture.wrapT = RepeatWrapping;
stoneTexture.magFilter = NearestFilter;

export { groundTexture, grassTexture, glassTexture, logTexture, stoneTexture }