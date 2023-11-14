import { Panel, Text } from '@bigcommerce/big-design';

export const Widget = () => {
    return (
        <Panel
        action={{
          variant: 'secondary',
          text: 'Button',
          onClick: () => {
            // Do some action
          },
        }}
        description="This is the panel's optional description."
        header="Panel header"
      >
        <Text>
          Lorem ipsum dolor amet officia humblebrag selvage, subway tile vexillologist id
          pickled adaptogen fashion axe. Ennui meh pitchfork banh mi. Keffiyeh PBRB echo park
          gastropub. Pop-up neutra brunch ullamco affogato shaman vexillologist quinoa
          post-ironic locavore. Retro selfies proident synth ethical quinoa marfa chartreuse
          dolor vexillologist gochujang. Tempor poke unicorn, readymade crucifix fugiat culpa.
          Kinfolk hella asymmetrical, meggings et consectetur lomo farm-to-table exercitation
          DIY.
        </Text>
      </Panel>
    )
}
