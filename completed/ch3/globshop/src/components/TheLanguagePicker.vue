<script setup>
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

const changeLocale = (event) => {
  const newLocale = event.target.value;
  locale.value = newLocale;
};
</script>

<template>
  <select @change="changeLocale">
    <option
      v-for="supportedLocale in availableLocales"
      :key="`locale-${supportedLocale}`"
      :value="supportedLocale"
    >
      {{ supportedLocale }}
    </option>
  </select>
</template>

<style scoped>
select {
  font-size: 18px;
  width: 67px;
  background: #0096f0;
  outline: none;
  padding: 8px;
  cursor: pointer;
  margin-left: 20px;
  border: none;
}
</style>
