
export const mapEntitiesToRenderArray = (content, entities) => {
  let parsedContent = [];

  parsedContent = parsedContent.concat({
    isEntity: false,
    text: content.slice(0, entities[0].startOffset)
  });

  for (let i = 0; i < entities.length - 1; i++) {
    parsedContent = parsedContent.concat({
      ...entities[i],
      isEntity: true,
      text: content.slice(entities[i].startOffset, entities[i].endOffset)
    });

    parsedContent = parsedContent.concat({
      isEntity: false,
      text: content.slice(entities[i].endOffset, entities[i + 1].startOffset)
    });
  }

  parsedContent = parsedContent.concat({
    ...entities[entities.length - 1],
    isEntity: true,
    text: content.slice(entities[entities.length - 1].startOffset,
      entities[entities.length - 1].endOffset)
  });

  parsedContent = parsedContent.concat({
    isEntity: false,
    text: content.slice(entities[entities.length - 1].endOffset, content.length)
  });

  return parsedContent;
};
