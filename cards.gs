function simpleCard(
  cardId,
  title,
  subtitle,
  imageUrl = "",
  imageType = "CIRCLE"
) {
  return {
    cardId: cardId,
    card: {
      header: {
        title: title,
        subtitle: subtitle,
        imageUrl: imageUrl,
        imageType: imageType,
      },
    },
  };
}

class Card {
  constructor(cardId, header, sections, sectionDividerStyle) {
    this.cardId = cardId;
    this.header = header;
    this.sections = sections;
    this.sectionDividerStyle = sectionDividerStyle;
  }
  toJSON() {
    const removeEmpty = (obj) => {
      let newObj = {};
      Object.keys(obj).forEach((key) => {
        if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
        else if (obj[key] !== undefined) newObj[key] = obj[key];
      });
      return newObj;
    };
    return removeEmpty(this);
  }
}

class CardHeader {
  constructor(title, subtitle, imageType, imageUrl, imageAltText) {
    this.title = title;
    this.subtitle = subtitle;
    this.imageType = imageType;
    this.imageUrl = imageUrl;
    this.imageAltText = imageAltText;
  }
}

class Section {
  constructor(header, widgets, collapsible, uncollapsibleWidgetsCount) {
    this.header = header;
    this.widgets = widgets;
    this.collapsible = collapsible;
    this.uncollapsibleWidgetsCount = uncollapsibleWidgetsCount;
  }
}

class Widget {
  constructor(
    horizontalAlignment,
    textParagraph,
    image,
    decoratedText,
    buttonList,
    textInput,
    selectionInput,
    dateTimePicker,
    divider,
    grid,
    columns
  ) {
    this.horizontalAlignment = horizontalAlignment;
    this.textParagraph = textParagraph;
    this.image = image;
    this.decoratedText = decoratedText;
    this.buttonList = buttonList;
    this.textInput = textInput;
    this.selectionInput = selectionInput;
    this.dateTimePicker = dateTimePicker;
    this.divider = divider;
    this.grid = grid;
    this.columns = columns;
  }
}

class TextParagraph {
  constructor(text) {
    this.text = text;
  }
}

class Image {
  constructor(url, onClick, altText) {
    this.url = url;
    this.onClick = onClick;
    this.altText = altText;
  }
}

class OnClick {
  constructor(action, openLink, openDynamicLinkAction, card) {
    this.action = action;
    this.openLink = openLink;
    this.openDynamicLinkAction = openDynamicLinkAction;
    this.card = card;
  }
}

class Action {
  constructor(
    customFunction,
    parameters,
    loadIndicator,
    persistValues,
    interaction
  ) {
    this.function = customFunction;
    this.parameters = parameters;
    this.loadIndicator = loadIndicator;
    this.persistValues = persistValues;
    this.interaction = interaction;
  }
}

class ActionParameter {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class OpenLink {
  constructor(url) {
    this.url = url;
  }
}

class DecoratedText {
  constructor(
    startIcon,
    topLabel,
    text,
    wrapText,
    bottomLabel,
    onClick,
    button,
    switchControl,
    endIcon
  ) {
    this.startIcon = startIcon;
    this.topLabel = topLabel;
    this.text = text;
    this.wrapText = wrapText;
    this.bottomLabel = bottomLabel;
    this.onClick = onClick;
    this.button = button;
    this.switchControl = switchControl;
    this.endIcon = endIcon;
  }
}

class Icon {
  constructor(altText, imageType, knownIcon, iconUrl) {
    this.altText = altText;
    this.imageType = imageType;
    this.knownIcon = knownIcon;
    this.iconUrl = iconUrl;
  }
}

class Button {
  constructor(text, icon, color, onClick, disabled, altText) {
    this.text = text;
    this.icon = icon;
    this.color = color;
    this.onClick = onClick;
    this.disabled = disabled;
    this.altText = altText;
  }
}

class Color {
  constructor(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
}

class SwitchControl {
  constructor(name, value, selected, onChangeAction, controlType) {
    this.name = name;
    this.value = value;
    this.selected = selected;
    this.onChangeAction = onChangeAction;
    this.controlType = controlType;
  }
}

class ButtonList {
  constructor(buttons) {
    this.buttons = buttons;
  }
}

class TextInput {
  constructor(
    name,
    label,
    hintText,
    value,
    type,
    onChangeAction,
    initialSuggestions,
    autoCompleteAction
  ) {
    this.name = name;
    this.label = label;
    this.hintText = hintText;
    this.value = value;
    this.type = type;
    this.onChangeAction = onChangeAction;
    this.initialSuggestions = initialSuggestions;
    this.autoCompleteAction = autoCompleteAction;
  }
}

class Suggestions {
  constructor(items) {
    this.items = items;
  }
}

class SuggestionItem {
  constructor(text) {
    this.text = text;
  }
}

class SelectionInput {
  constructor(
    name,
    label,
    type,
    items,
    onChangeAction,
    multiSelectMaxSelectedItems,
    multiSelectMinQueryLength,
    externalDataSource,
    platformDataSource
  ) {
    this.name = name;
    this.label = label;
    this.items = items;
    this.value = value;
    this.type = type;
    this.onChangeAction = onChangeAction;
    this.multiSelectMaxSelectedItems = multiSelectMaxSelectedItems;
    this.multiSelectMinQueryLength = multiSelectMinQueryLength;
    this.externalDataSource = externalDataSource;
    this.platformDataSource = platformDataSource;
  }
}

class SelectionItem {
  constructor(text, value, selected, startIconUri, bottomText) {
    this.text = text;
    this.value = value;
    this.selected = selected;
    this.startIconUri = startIconUri;
    this.bottomText = bottomText;
  }
}

class DateTimePicker {
  constructor(
    name,
    label,
    type,
    valueMsEpoch,
    timezoneOffsetDate,
    onChangeAction
  ) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.valueMsEpoch = valueMsEpoch;
    this.timezoneOffsetDate = timezoneOffsetDate;
    this.onChangeAction = onChangeAction;
  }
}

class Divider {
  constructor() {}
}

class Grid {
  constructor(title, items, borderStyle, columnCount, onClick) {
    this.title = title;
    this.items = items;
    this.borderStyle = borderStyle;
    this.columnCount = columnCount;
    this.onClick = onClick;
  }
}

class GridItem {
  constructor(id, image, title, subtitle, layout) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.subtitle = subtitle;
    this.layout = layout;
  }
}

class ImageComponent {
  constructor(imageUri, altText, cropStyle, borderStyle) {
    this.imageUri = imageUri;
    this.altText = altText;
    this.cropStyle = cropStyle;
    this.borderStyle = borderStyle;
  }
}

class ImageCropStyle {
  constructor(type, aspectRatio) {
    this.type = type;
    this.aspectRatio = aspectRatio;
  }
}

class BorderStyle {
  constructor(type, strokeColor, cornerRadius) {
    this.type = type;
    this.strokeColor = strokeColor;
    this.cornerRadius = cornerRadius;
  }
}

class Columns {
  constructor(columnItems) {
    this.columnItems = columnItems;
  }
}

class Column {
  constructor(
    horizontalSizeStyle,
    horizontalAlignment,
    verticalAlignment,
    widgets
  ) {
    this.horizontalSizeStyle = horizontalSizeStyle;
    this.horizontalAlignment = horizontalAlignment;
    this.verticalAlignment = verticalAlignment;
    this.widgets = widgets;
  }
}

class Widgets {
  constructor(
    textParagraph,
    image,
    decoratedText,
    buttonList,
    textInput,
    selectionInput,
    dateTimePicker
  ) {
    this.textParagraph = textParagraph;
    this.image = image;
    this.decoratedText = decoratedText;
    this.buttonList = buttonList;
    this.textInput = textInput;
    this.selectionInput = selectionInput;
    this.dateTimePicker = dateTimePicker;
  }
}

class CardFixedFooter {
  constructor(primaryButton, secondaryButton) {
    this.primaryButton = primaryButton;
    this.secondaryButton = secondaryButton;
  }
}
