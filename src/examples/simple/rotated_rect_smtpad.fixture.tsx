import type React from "react"
import { PCBViewer } from "../../PCBViewer"
import { AnyCircuitElement } from "circuit-json"

export const RotatedRectExample: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <PCBViewer
        circuitJson={
          [
            {
              type: "pcb_smtpad",
              pcb_smtpad_id: "pcb_smtpad_0",
              pcb_component_id: "pcb_component_0",
              pcb_port_id: "pcb_port_0",
              layer: "top",
              shape: "rotated_rect",
              ccw_rotation: 170,
              width: 0.6000000000000001,
              height: 0.6000000000000001,
              port_hints: ["1", "left"],
              x: 2,
              y: 0,
            },
            {
              type: "pcb_smtpad",
              pcb_smtpad_id: "pcb_smtpad_1",
              pcb_component_id: "pcb_component_1",
              pcb_port_id: "pcb_port_1",
              layer: "top",
              shape: "rotated_rect",
              ccw_rotation: 10,
              width: 0.6000000000000001,
              height: 0.6000000000000001,
              port_hints: ["2", "left"],
              x: 0,
              y: 0,
            },
          ] as AnyCircuitElement[]
        }
      />
    </div>
  )
}

export default RotatedRectExample
