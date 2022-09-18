import { View, Text, ViewProps, ColorValue, Modal, ModalProps, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import { Headling } from '../Headling';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}


export function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>

          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Headling
            title="Let's play!"
            subtitle='Agora é só começar'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
          >
            <Text style={styles.discord}>
              {discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
