declare global {
    namespace JSX {
      interface IntrinsicElements {
        group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
      }
    }
  }
  