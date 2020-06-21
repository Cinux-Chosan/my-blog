<template>
  <v-combobox
    v-model="proxyModel"
    :filter="filter"
    :hide-no-data="!search"
    :items="proxyTags"
    :search-input.sync="search"
    hide-selected
    label="Search for a tag"
    multiple
    dense
    small-chips
    solo-inverted
  >
    <template #no-data>
      <v-list-item>
        <span class="subheading mr-2">Create tag:</span>
        <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small>{{ search }}</v-chip>
        <span class="ml-2">(Press Enter)</span>
      </v-list-item>
    </template>
    <template #selection="{ attrs, item, parent, selected }">
      <v-chip v-bind="attrs" :color="`${item.color} lighten-3`" :input-value="selected" label small>
        <span class="pr-2">{{ item.text }}</span>
        <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
      </v-chip>
    </template>
    <template #item="{ index, item }">
      <v-text-field
        v-if="editing === item"
        v-model="editing.text"
        autofocus
        flat
        background-color="transparent"
        hide-details
        solo
        @keyup.enter="edit(index, item)"
      ></v-text-field>
      <v-chip v-else :color="`${item.color} lighten-3`" dark label small>{{ item.text }}</v-chip>
      <v-spacer></v-spacer>
      <v-list-item-action @click.stop class="flex-row">
        <v-btn icon @click.stop.prevent="edit(index, item)">
          <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
        </v-btn>
        <v-btn icon @click.stop.prevent="$emit('del', item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-combobox>
</template>

<script>
export default {
  model: { prop: 'value', event: 'change' },
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    activator: null,
    attach: null,
    colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
    editing: null,
    index: -1,
    nonce: 0,
    menu: false,
    model: [],
    search: null,
    x: 0,
    y: 0
  }),
  computed: {
    proxyTags() {
      const { tags, colors } = this
      let nonce = 0
      return tags.map(tag => {
        nonce = nonce % colors.length
        return {
          text: tag.text,
          color: colors[nonce++]
        }
      })
    },
    proxyModel: {
      get() {
        const { setColor } = this
        return setColor(this.value)
      },
      set(v) {
        const { setColor } = this
        v = v.map(tag => {
          if (typeof tag === 'string') {
            ;[tag] = setColor([{ text: tag }])
            this.$emit('add', tag)
          }
          return tag
        })
        this.$emit('change', v)
      }
    }
  },

  methods: {
    setColor(tags) {
      const { getColor } = this
      tags.forEach(tag =>
        Object.assign(tag, { color: tag.color || getColor() })
      )
      return tags
    },
    getColor() {
      let { colors, nonce } = this
      this.nonce = (nonce % colors.length) + 1
      return colors[nonce]
    },
    edit(index, item) {
      if (!this.editing) {
        this.editing = item
        this.index = index
      } else {
        this.editing = null
        this.index = -1
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false

      const hasValue = val => (val != null ? val : '')
      const text = hasValue(item.text)
      const query = hasValue(queryText)

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      )
    }
  }
}
</script>