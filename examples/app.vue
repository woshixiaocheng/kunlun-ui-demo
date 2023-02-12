<template>
  <KlIcon name="anquan"></KlIcon>
  <!-- 测试组件 -->
  <h2>基础</h2>
  <kl-button>Default</kl-button>
  <kl-button type="primary">Primary</kl-button>
  <kl-button type="success">Success</kl-button>
  <kl-button type="info">Info</kl-button>
  <kl-button type="warning">Warning</kl-button>
  <kl-button type="danger">Danger</kl-button>
  <h2>镂空的</h2>
  <kl-button plain>Default</kl-button>
  <kl-button type="primary" plain>Primary</kl-button>
  <kl-button type="success" plain>Success</kl-button>
  <kl-button type="info" plain> Info</kl-button>
  <kl-button type="warning" plain>Warning</kl-button>
  <kl-button type="danger" plain>Danger</kl-button>
  <h2>圆角</h2>
  <kl-button round>Default</kl-button>
  <kl-button type="primary" round>Primary</kl-button>
  <kl-button type="success" round>Success</kl-button>
  <kl-button type="info" round>Info</kl-button>
  <kl-button type="warning" round>Warning</kl-button>
  <kl-button type="danger" round>Danger</kl-button>
  <h2>圆</h2>
  <kl-button circle>D</kl-button>
  <kl-button type="primary" circle>P</kl-button>
  <kl-button type="success" circle>Su</kl-button>
  <kl-button type="info" circle>Io</kl-button>
  <kl-button type="warning" circle>Wa</kl-button>
  <kl-button type="danger" circle>Da</kl-button>
  <h2>大小</h2>
  <kl-button size="small">small</kl-button>
  <kl-button>Default</kl-button>
  <kl-button size="large">large</kl-button>
  <h2>禁用</h2>
  <kl-button plain disabled>Default</kl-button>
  <kl-button type="primary" plain disabled>Primary</kl-button>
  <kl-button type="success" plain disabled>Success</kl-button>
  <kl-button type="info" plain disabled> Info</kl-button>
  <kl-button type="warning" plain disabled> Warning</kl-button>
  <kl-button type="danger" plain disabled>Danger</kl-button>
  <h2>禁用2</h2>
  <kl-button disabled>Default</kl-button>
  <kl-button type="primary" disabled>Primary</kl-button>
  <kl-button type="success" disabled>Success</kl-button>
  <kl-button type="info" disabled> Info</kl-button>
  <kl-button type="warning" disabled> Warning</kl-button>
  <kl-button type="danger" disabled>Danger</kl-button>
  <KlRow
    tag="div"
    justify="center"
    align="middle"
    :gutter="16"
    style="height: 200px"
  >
    <KlCol tag="span" :xs="{ order: 1 }" :lg="{ order: 2 }" :span="6">
      <div style="background: red">11</div>
    </KlCol>
    <KlCol :xs="{ order: 2 }" :lg="{ order: 1 }" :span="18"
      ><div style="background: green">11</div></KlCol
    >
  </KlRow>
</template>
<script lang="ts" setup>
import { KlIcon } from 'kunlun-ui';
import { KlButton } from 'kunlun-ui';
import { KlCol } from 'kunlun-ui';
import { KlRow } from 'kunlun-ui';
</script>
