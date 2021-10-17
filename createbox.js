Box2 = function () {
    //                    nen
    var geom = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
  
    //                         vach1
    var geom2 = new THREE.BoxGeometry(139, 30, 28, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(0, 55, 0);
    vach1.rotation.z = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    //                         vach2
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(0, 110, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    //////////////////T
    //                         vach1
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(100, 110, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
    ///////////////////////vach 2
    var geom2 = new THREE.BoxGeometry(139, 30, 28, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(100, 55, 0);
    vach1.rotation.z = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    //////////////////z
    var geom2 = new THREE.BoxGeometry(96, 30, 28, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(200, 45, 0);
    vach1.rotation.z = Math.PI / 3.3;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
    //                         vach2
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(200, 90, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
    //                         vach3
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(200, 0, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    //////////////////////o
    var geom2 = new THREE.SphereGeometry(50, 70, 70);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(295, 28, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    /////////////////////////n
  
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(410, 90, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    ///////vach2
    var geom2 = new THREE.BoxGeometry(102, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(370, 38, 0);
    vach1.rotation.z = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    ///////vach3
    var geom2 = new THREE.BoxGeometry(102, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(450, 38, 0);
    vach1.rotation.z = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    ///////xoay1
    var geom2 = new THREE.CylinderGeometry(15, 15, 29, 100);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(370, 90, 0);
    vach1.rotation.x = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    ///////xoay2
    var geom2 = new THREE.CylinderGeometry(15, 15, 29, 100);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(450, 90, 0);
    vach1.rotation.x = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    ///////////////////////////////E
    var geom2 = new THREE.BoxGeometry(120, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(500, 45, 0);
    vach1.rotation.z = Math.PI / 2;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
    /////////////vach 1-2
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(525, 90, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
    //
    var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(525, 0, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
    // vachgiua
    var geom2 = new THREE.BoxGeometry(79, 29, 29, 1, 1, 1);
    var mat2 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.position.set(525, 45, 0);
    vach1.receiveShadow = true;
    this.mesh.add(vach1);
  
  };
  
  // Khởi tạo và thêm vào scene
  var box2;
  
  function createBox() {
    box2 = new Box2();
  
    // đặt vị trí phía dưới scene
    box2.mesh.position.set(1150, 300,-800);
    box2.mesh.rotation.y  = -0.5
    // box2.mesh.rotation.z  = -0.2
    box2.mesh.scale.set(0.4, 0.4, 0.4);
    // thêm lưới này vào scene1.5
    scene.add(box2.mesh);
  }
  