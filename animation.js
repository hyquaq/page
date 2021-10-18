function loop() {
  // render the scene
  renderer.render(scene, camera);

  // gọi hàm lặp lại
  requestAnimationFrame(loop);
  box2.mesh.rotation.y  += 0.008;
    box.mesh.rotation.y -= 0.008;
}
