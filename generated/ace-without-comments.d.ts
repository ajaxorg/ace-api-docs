export namespace Ace {
    export class Map {
    }

    export class NodeBuffer {
    }

    export class XQLint {
    }

    export class SetCache {
    }

    export class LodashWrapper {
    }

    export class ArrayBuffer {
    }

    export class XQDoc {
    }

    export class StyleChecker {
    }

    export class Translator {
    }

    export class JSONParseTreeHandler {
    }

    export class XQueryParser {
    }

    export class JSONiqParser {
    }

    export class XQueryTokenizer {
    }

    export class Handlers {
    }

    export class StaticContext {
    }

    export class SchemaBuiltinTypes {
    }

    export class EQNameHandler {
    }

    export class SchemaPrefixHandler {
    }

    export class Errors {
    }

    export class TreeOps {
    }

    export class StaticWarning {
    }

    export class StaticError {
    }

    export class TokenHandler {
    }

    export class JSONiqTokenizer {
    }

    export class ElementAttributes {
    }

    export class XMLReader {
    }

    export class EntityReference {
    }

    export class Notation {
    }

    export class DocumentType {
    }

    export class CDATASection {
    }

    export class CharacterData {
    }

    export class Attr {
    }

    export class DOMImplementation {
    }

    export class NamedNodeMap {
    }

    export class NodeList {
    }

    export class DOMException {
    }

    export class ExceptionMessage {
    }

    export class ExceptionCode {
    }

    export class VisualforceMode {
    }

    export class SnippetGroupHighlightRules {
    }

    export class SnippetHighlightRules {
    }

    export class NameStack {
    }

    export class Context {
    }

    export class CompArray {
    }

    export class FutureReservedWord {
    }

    export class Lexer {
    }

    export class SymbolProto {
    }

    export class ArrayProto {
    }

    export class Ctor {
    }

    export class Stack {
        constructor(entries: any[]);
    }

    export class MapCache {
    }

    export class ListCache {
        constructor(entries: any[]);
    }

    export class Hash {
        constructor(entries: any[]);
    }

    export class DataView {
    }

    export class Buffer {
    }

    export class TempCtor {
    }

    export class StackItem {
    }

    export class SpecialElements {
    }

    export class EntityParser {
    }

    export class InputStream {
    }

    export class ElementStack {
    }

    export class Tag {
    }

    export class EjsHighlightRules {
    }

    export class DjangoHtmlHighlightRules {
    }

    export class DjangoHighlightRules {
    }

    export class Properties {
    }

    export class XQueryBehaviour {
    }

    export class XmlBehaviour {
    }

    export class LiquidBehaviour {
    }

    export class HtmlBehaviour {
    }

    export class CssBehaviour {
    }

    export class ApexMode {
    }

    export class Keys {
    }

    export class UnicodeTBL20 {
    }

    export class UnicodeTBL00 {
    }

    export class ArabicAlefBetIntervalsEnd {
    }

    export class ArabicAlefBetIntervalsBegine {
    }

    export class TextInput {
    }

    export class MultiHashHandler {
    }

    export class ISearchKbd {
    }

    export class SimpleTextLayer {
    }

    export class AceEmmetEditor {
    }

    export class AcePopup {
    }

    export class UIWorkerClient {
    }

    export class WorkerClient {
        $createWorkerFromOldConfig(topLevelNamespaces: any, mod: any, classname: any, workerUrl: any, importScripts: any): any;
        $sendDeltaQueue(): void;
        changeListener(delta: any): void;
        attachToDocument(doc: any): void;
        emit(event: any, data: any): void;
        call(cmd: any, args: any, callback: any): void;
        send(cmd: any, args: any): void;
        terminate(): void;
        $normalizePath(path: any): any;
        reportError(err: any): void;
        onMessage(e: any): void;
    }

    export class BlobBuilder {
    }

    export class Sender {
        emit(name: any, data: any): void;
        callback(data: any, callbackId: any): void;
    }

    export class Mirror {
        isPending(): any;
        onUpdate(): void;
        getValue(callbackId: any): void;
        setValue(value: any): void;
        setTimeout(timeout: any): void;
    }

    export class Tooltip {
        destroy(): void;
        getWidth(): Number;
        getHeight(): Number;
        hide(): void;
        show(text: String, x: Number, y: Number): void;
        setClassName(className: String): void;
        setPosition(x: Number, y: Number): void;
        setHtml(html: String): void;
        setText(text: String): void;
        getElement(): Element;
        $init(): any;
        constructor(parentNode: Element);
    }

    export class MockRenderer {
        adjustWrapLimit(): void;
        screenToTextCoordinates(): { row: number; column: number; };
        textToScreenCoordinates(): { pageX: number; pageY: number; };
        unsetStyle(): void;
        setStyle(): void;
        setAnnotations(): void;
        visualizeFocus(): void;
        showCursor(): void;
        updateText(): void;
        updateFull(): void;
        onResize(): void;
        updateBreakpoints(): void;
        updateFrontMarkers(): void;
        updateBackMarkers(): void;
        updateLines(startRow: any, endRow: any): void;
        onChangeTabSize(startRow: any, endRow: any): void;
        draw(): void;
        getScrollTopRow(): any;
        scrollToRow(row: any): void;
        scrollCursorIntoView(): void;
        scrollSelectionIntoView(): void;
        scrollToLine(line: any, center: any): void;
        scrollToY(scrollLeft: any): void;
        scrollToX(scrollTop: any): void;
        animateScrolling(fromValue: any, callback: any): void;
        updateCursor(): void;
        on(): void;
        setTokenizer(): void;
        getSession(session: any): any;
        setSession(session: any): void;
        moveTextAreaToCursor(): void;
        removeGutterDecoration(): void;
        addGutterDecoration(): void;
        getTextAreaContainer(): any;
        getMouseEventTarget(): any;
        getContainerElement(): any;
        getLastFullyVisibleRow(): any;
        getFirstFullyVisibleRow(): any;
        getLastVisibleRow(): any;
        getFirstVisibleRow(): any;
    }

    export class TextNode {
        cloneNode(): any;
    }

    export class Event {
        stopPropagation(): void;
        preventDefault(): void;
        initMouseEvent(type: any, _1: any, _2: any, window: any, detail: any, x: any, y: any, _x: any, _y: any, ctrl: any, alt: any, shift: any, meta: any, button: any, relatedTarget: any): void;
    }

    export class ClassList {
        contains(str: any): void;
        toggle(str: any): void;
        remove(str: any): void;
        add(str: any): void;
    }

    export class Style {
        getPropertyValue(): string;
    }

    export class TestGenerator {
        setupTest(): any;
        summary(callback: any): void;
        report(): any;
        run(): any;
        exec(): void;
    }

    export class Generator {
        toArray(breakOnError: any, callback: any): void;
        end(breakOnError: any, callback: any): void;
        $arrayOp(arrayMethod: any, args: any): any;
        reverse(): any;
        join(separator: any): any;
        sort(compare: any): any;
        expand(inserter: any, constructor: any): any;
        zip(generator: any): any;
        concat(generator: any): any;
        call(context: any): any;
        every(condition: any): any;
        some(condition: any): any;
        forEach(fn: any): any;
        each(fn: any): any;
        reduce(reduce: any, initialValue: any): any;
        slice(begin: any, end: any): any;
        filter(filter: any): any;
        map(mapper: any): any;
        next(callback: any): void;
    }

    export class Split {
        resize(): void;
        setOrientation(orientation: Number): void;
        getOrientation(): Number;
        setSession(session: EditSession, idx: Number): any;
        $cloneSession(session: any): any;
        setFontSize(size: Number): void;
        forEach(callback: Function, scope: String): void;
        setKeyboardHandler(keybinding: String): void;
        setTheme(theme: String): void;
        blur(): void;
        focus(): void;
        getCurrentEditor(): Editor;
        getEditor(idx: Number): any;
        getSplits(): Number;
        setSplits(splits: any): void;
        $createEditor(): any;
    }

    export class TabstopManager {
        removeRange(range: any): void;
        removeTabstopMarkers(ts: any): void;
        addTabstopMarkers(ts: any): void;
        addTabstops(tabstops: any, start: any, end: any): void;
        selectTabstop(index: any): void;
        tabNext(dir: any): void;
        onChangeSession(): void;
        onChangeSelection(): void;
        onAfterExec(e: any): void;
        updateLinkedFields(): void;
        onChange(delta: any): void;
        detach(): void;
        attach(editor: any): void;
    }

    export class TabstopToken {
    }

    export class SnippetManager {
        getSnippetByName(name: any, editor: any): any;
        parseSnippetFile(str: any): {};
        unregister(snippets: any, scope: any): void;
        register(snippets: any, scope: any): void;
        findMatchingSnippet(snippetList: any, before: any, after: any): any;
        expandSnippetForSelection(editor: any, options: any): boolean;
        expandWithTab(editor: any, options: any): any;
        getActiveScopes(editor: any): {};
        $getScope(editor: any): any;
        insertSnippet(editor: any, snippetText: any): any;
        insertSnippetForSelection(editor: any, snippetText: any): void;
        resolveVariables(snippet: any, editor: any): {};
        tmFormatFunction(str: any, ch: any, editor: any): any;
        tmStrFormat(str: any, ch: any, editor: any): any;
        getVariableValue(editor: any, name: any, indentation: any): any;
        tokenizeTmSnippet(str: any, startState: any): any;
        createTokenizer(): any;
        getTokenizer(): any;
    }

    export class SearchHighlight {
        update(html: any, markerLayer: any, session: any, config: any): void;
        setRegexp(regExp: any): void;
    }

    export class Search {
        $matchIterator(session: any, options: any): false | { forEach: (callback: any) => void; };
        $assembleMultilineRegExp(needle: any, modifier: any): {};
        $assembleRegExp(options: any, $disableFakeMultiline: any): any;
        replace(input: String, replacement: String): String;
        findAll(session: EditSession): [Range];
        find(session: EditSession): Range;
        setOptions(options: any): void;
        getOptions(): Object;
        set(options: Object): Search;
        constructor();
    }

    export class HScrollBar {
        setScrollLeft(scrollLeft: any): void;
        setScrollWidth(width: Number): void;
        setInnerWidth(width: Number): void;
        setWidth(width: Number): void;
        getHeight(): Number;
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        constructor(parent: Element, renderer: Object);
    }

    export class VScrollBar {
        setScrollTop(scrollTop: Number): void;
        setInnerHeight(height: Number): void;
        setScrollHeight(height: Number): void;
        setHeight(height: Number): void;
        getWidth(): Number;
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        constructor(parent: Element, renderer: Object);
    }

    export class ScrollBar {
        setVisible(isVisible: any): void;
        constructor(parent: Element);
    }

    export class RenderLoop {
        clear(change: any): any;
        schedule(change: any): void;
    }

    export class RangeList {
        $onChange(delta: any): void;
        detach(): void;
        attach(session: any): void;
        removeAll(): any;
        clipRows(startRow: any, endRow: any): {};
        rangeAtPoint(pos: any): any;
        containsPoint(pos: any): boolean;
        contains(row: any, column: any): boolean;
        merge(): {};
        substractPoint(pos: any): any;
        addList(list: any): {};
        add(range: any): any;
        pointIndex(pos: any, excludeEdges: any, startIndex: any): any;
    }

    export class PlaceHolder {
        cancel(): void;
        detach(): void;
        onCursorChange(event: any): void;
        updateMarkers(): void;
        updateAnchors(delta: any): void;
        onUpdate(delta: any): any;
        hideOtherMarkers(): void;
        showOtherMarkers(): void;
        setup(): void;
        constructor();
    }

    export class Occur {
        matchingLines(session: any, options: any): any;
        occurToOriginalPosition(session: EditSession, pos: Object): Object;
        originalToOccurPosition(session: EditSession, pos: Object): { row: number; column: any; };
        displayOriginalContent(editor: any): void;
        displayOccurContent(editor: any, options: any): void;
        highlight(sess: any, regexp: any): void;
        exit(editor: Editor, options: Object): boolean;
        enter(editor: Editor, options: Object): boolean;
        constructor();
    }

    export class MultiSelect {
    }

    export class MouseHandler {
        destroy(): void;
        cancelContextMenu(): void;
        captureMouse(ev: any, mouseMoveHandler: any): any;
        setState(state: any): void;
        onMouseWheel(name: any, e: any): void;
        onMouseMove(name: any, e: any): void;
        onMouseEvent(name: any, e: any): void;
    }

    export class MouseEvent {
        getShiftKey(): any;
        getButton(): any;
        inSelection(): any;
        getDocumentPosition(): any;
        stop(): void;
        preventDefault(): void;
        stopPropagation(): void;
    }

    export class FoldHandler {
    }

    export class DragdropHandler {
        onMouseDown(e: any): void;
        onMouseDrag(e: any): void;
        startDrag(): void;
        dragReadyEnd(e: any): void;
        dragWaitEnd(): void;
        dragWait(): void;
        onDrop(e: any): any;
        onDragLeave(e: any): any;
        onDragOver(e: any): any;
        onDragEnter(e: any): any;
        onDragEnd(e: any): void;
        onDragStart(e: any): any;
    }

    export class DefaultHandlers {
        onMouseWheel(ev: any): any;
        onQuadClick(ev: any): void;
        onTripleClick(ev: any): void;
        onDoubleClick(ev: any): void;
        focusWait(): void;
        selectAllEnd(): void;
        selectByLinesEnd(): void;
        extendSelectionBy(unitName: any): void;
        select(): void;
        startSelect(pos: any, waitForClickSelection: any): void;
        onMouseDown(ev: any): any;
    }

    export class GutterTooltip {
        setPosition(x: any, y: any): void;
    }

    export class GutterHandler {
    }

    export class YamlWorker {
        onUpdate(): void;
        changeOptions(newOptions: any): void;
        setOptions(): void;
    }

    export class Schema {
        create(): any;
    }

    export class Mark {
        toString(compact: any): string;
        getSnippet(indent: any, maxLength: any): string;
    }

    export class YAMLException {
        toString(compact: any): string;
    }

    export class State {
    }

    export class XQueryWorker {
        onUpdate(): void;
    }

    export class LazyWrapper {
        toArray(): any;
        takeRightWhile(predicate: any, thisArg: any): any;
        slice(start: any, end: any): any;
        reject(predicate: any, thisArg: any): any;
        compact(): any;
        LazyWrapper(): any;
    }

    export class Rules {
        exports(): any;
    }

    export class XMLSerializer {
        serializeToString(node: any): any;
    }

    export class LiveNodeList {
        item(i: any): any;
    }

    export class DOMHandler {
        DOMHandler(): any;
    }

    export class DOMParser {
        parseFromString(source: any, mimeType: any): any;
    }

    export class RazorCompletions {
        getKeywordCompletions(state: any, session: any, pos: any, prefix: any): any;
        getShortStartCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class PhpWorker {
        onUpdate(): void;
        setOptions(opts: any): void;
    }

    export class PhpCompletions {
        getArrayKeyCompletions(state: any, session: any, pos: any, prefix: any): any;
        getVariableCompletions(state: any, session: any, pos: any, prefix: any): any;
        getFunctionCompletions(state: any, session: any, pos: any, prefix: any): any;
        getTagCompletions(state: any, session: any, pos: any, prefix: any): {};
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class PhpMode {
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        autoOutdent(state: any, doc: any, row: any): void;
        checkOutdent(state: any, line: any, input: any): any;
        getNextLineIndent(state: any, line: any, tab: any): any;
    }

    export class MatchingParensOutdent {
        $getIndent(line: any): any;
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class MatchingBraceOutdent {
        $getIndent(line: any): any;
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class LoopFlowContext {
        addLocal(): void;
        addGoto(): never;
        popScope(): void;
        pushScope(isLoop: any): void;
        isInLoop(): boolean;
    }

    export class FullFlowContext {
        raiseDeferredErrors(): void;
        currentScope(): any;
        addLocal(name: any, token: any): void;
        addLabel(name: any, token: any): void;
        addGoto(target: any, token: any): void;
        popScope(): void;
        pushScope(isLoop: any): void;
        isInLoop(): boolean;
    }

    export class JsonWorker {
        onUpdate(): void;
    }

    export class JavaScriptWorker {
        onUpdate(): any;
        changeOptions(newOptions: any): void;
        setOptions(options: any): void;
    }

    export class Item {
        run(): void;
    }

    export class HtmlCompletions {
        getHTMLEntityCompletions(state: any, session: any, pos: any, prefix: any): any;
        getAttributeValueCompletions(state: any, session: any, pos: any, prefix: any): any;
        getAttributeCompletions(state: any, session: any, pos: any, prefix: any): any;
        getTagCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class NullLexicalHandler {
        startEntity(): void;
        startDTD(): void;
        startCDATA(): void;
        endEntity(): void;
        endDTD(): void;
        endCDATA(): void;
        comment(): void;
    }

    export class ProcessingInstruction {
        getNodeType(): number;
        visit(treeParser: any): void;
    }

    export class SkippedEntity {
        visit(treeParser: any): void;
    }

    export class Entity {
        revisit(treeParser: any): void;
        visit(treeParser: any): void;
    }

    export class Comment {
        visit(treeParser: any): void;
    }

    export class IgnorableWhitespace {
        visit(treeParser: any): void;
    }

    export class Characters {
        visit(treeParser: any): void;
    }

    export class DocumentFragment {
        visit(treeParser: any): void;
    }

    export class ParentNode {
        removeChild(node: any): any;
        appendChildren(parent: any): void;
        appendChild(child: any): any;
        insertBetween(child: any, prev: any, next: any): any;
        insertBefore(child: any, sibling: any): any;
    }

    export class Node {
        ___format(indent: any): string;
        blur(): void;
        focus(): void;
        contains(node: any): boolean;
        dispatchEvent(e: any): void;
        createEvent(v: any): any;
        removeEventListener(name: any, listener: any): void;
        addEventListener(name: any, listener: any, capturing: any): void;
        getBoundingClientRect(v: any): { top: number; left: number; width: number; height: number; right: number; bottom: number; };
        insertAdjacentElement(position: any, element: any): void;
        insertAdjacentHTML(position: any, markup: any): void;
        ___format(indent: any): string;
        getAttribute(a: any, v: any): any;
        setAttribute(a: any, v: any): void;
        removeAttribute(a: any): void;
        closest(s: any): any;
        matches(selector: any): boolean;
        getElementById(s: any): any;
        getElementsByTagName(s: any): {};
        querySelector(s: any): any;
        querySelectorAll(selector: any): {};
        hasAttributes(): boolean;
        hasChildNodes(): boolean;
        before(node: any): void;
        insertBefore(node: any, before: any): any;
        replaceChild(node: any, oldNode: any): any;
        remove(): void;
        removeChild(node: any): void;
        appendChild(node: any): any;
        cloneNode(recursive: any): any;
        toString(): any;
        detach(): void;
        revisit(treeParser: any): void;
        visit(treeParser: any): never;
    }

    export class NodeType {
    }

    export class SAXParser {
        parseFragment(source: any, context: any): void;
        parse(source: any, context: any): void;
    }

    export class TreeParser {
        startEntity(name: any, locator: any): void;
        startDTD(name: any, publicId: any, systemId: any, locator: any): void;
        startCDATA(locator: any): void;
        endEntity(name: any, locator: any): void;
        endDTD(locator: any): void;
        endCDATA(locator: any): void;
        comment(ch: any, start: any, length: any, locator: any): void;
        startPrefixMapping(prefix: any, uri: any, locator: any): void;
        startElement(uri: any, localName: any, qName: any, atts: any, locator: any): void;
        startDocument(locator: any): void;
        skippedEntity(name: any, locator: any): void;
        processingInstruction(target: any, data: any, locator: any): void;
        ignorableWhitespace(ch: any, start: any, length: any, locator: any): void;
        endPrefixMapping(prefix: any, locator: any): void;
        endElement(uri: any, localName: any, qName: any, locator: any): void;
        endDocument(locator: any): void;
        characters(ch: any, start: any, length: any, locator: any): void;
        parse(node: any): void;
    }

    export class SAXTreeBuilder {
        addAttributesToElement(element: any, attributes: any): void;
        getFragment(): any;
        reparentChildren(oldParent: any, newParent: any): void;
        detachFromParent(element: any): void;
        attachNodeToFosterParent(child: any, table: any, stackParent: any): void;
        attachNode(node: any, parent: any): void;
        insertText(data: any): any;
        appendCharacters(parent: any, data: any): void;
        insertComment(data: any, parent: any): void;
        createElement(namespaceURI: any, localName: any, attributes: any): any;
        insertDoctype(name: any, publicId: any, systemId: any): void;
        end(): void;
        start(tokenizer: any): void;
    }

    export class TreeBuilder {
    }

    export class CharacterBuffer {
        takeLeadingWhitespace(): any;
        takeRemaining(): any;
        skipLeadingNonWhitespace(): void;
        skipLeadingWhitespace(): void;
        skipAtMostOneLeadingNewline(): void;
    }

    export class FoldMode {
        _pop(stack: any, tag: any): any;
        _readTagBackward(iterator: any): any;
        _readTagForward(iterator: any): any;
        _findEndTagInLine(session: any, row: any, tagName: any, startColumn: any): boolean;
        _getFirstTagInLine(session: any, row: any): any;
        getCommentFoldWidget(session: any, row: any): "" | "start";
        vbsBlock(session: any, row: any, column: any, tokenRange: any): any;
        getBeginEndBlock(session: any, row: any, column: any, matchSequence: string): Range;
        rubyBlock(session: any, row: any, column: any, tokenRange: any): any;
        $tryMode(state: any, session: any, foldStyle: any, row: any): any;
        $getMode(state: any): any;
        luaBlock(session: any, row: any, column: any, tokenRange: any): any;
        latexSection(session: any, row: any, column: any): any;
        latexBlock(session: any, row: any, column: any, returnRange: any): any;
        isHeading(session: any, row: any): boolean;
        closingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        openingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        indentationBlock(session: any, row: any, column: any): any;
        getCommentRegionBlock(session: any, line: any, row: any): any;
        getSectionRange(session: any, row: any): any;
        getRegionBlock(session: any, line: any, row: any): any;
        getUsingStatementBlock(session: any, line: any, row: any): any;
        getFoldWidgetRange(session: any, foldStyle: any, row: any): any;
        getFoldWidget(session: any, foldStyle: any, row: any): any;
    }

    export class CssCompletions {
        getPropertyValueCompletions(state: any, session: any, pos: any, prefix: any): any;
        getPropertyCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        defineCompletions(): void;
    }

    export class Reporter {
        constructor(lines: String[], ruleset: Object, explicitly: Object, ignore: [][]);
    }

    export class CSSLint {
    }

    export class SyntaxError {
        constructor(message: String, line: Number, col: Number);
    }

    export class StringReader {
        constructor(text: String);
    }

    export class EventTarget {
        constructor();
    }

    export class ValidationTypes {
    }

    export class ValidationError {
        constructor(message: String, line: Number, col: Number);
    }

    export class Validation {
    }

    export class Tokens {
        type(c: any): any;
        name(tt: any): any;
    }

    export class TokenStream {
        constructor(input: String | Reader);
    }

    export class SelectorSubPart {
        constructor(text: String, type: String, line: Number, col: Number);
    }

    export class Pseudos {
        isElement(pseudo: any): boolean;
    }

    export class PropertyValue {
        constructor(parts: String[], line: Number, col: Number);
    }

    export class PropertyName {
        toString(): any;
        constructor(text: String, hack: String, line: Number, col: Number);
    }

    export class Parser {
        constructor(options: Object);
    }

    export class Matcher {
        oror(): any;
        andand(): any;
        many(required: any): any;
        alt(): any;
        seq(): any;
        fromType(type: any): any;
        cast(m: any): any;
        parse(str: any): any;
        match(expression: any): any;
    }

    export class Combinator {
        constructor(text: String, line: Number, col: Number);
    }

    export class Colors {
    }

    export class Worker {
        setOptions(options: any): void;
        setDisabledRules(ruleNames: any): void;
        setInfoRules(ruleNames: any): void;
        onUpdate(): void;
    }

    export class Behaviour {
        getBehaviours(filter: any): any;
        inherit(mode: any, filter: any): void;
        remove(name: any): void;
        addBehaviours(behaviours: any): void;
        add(name: any, action: any, callback: any): void;
    }

    export class LineWidgets {
        renderWidgets(e: any, renderer: any): void;
        measureWidgets(e: any, renderer: any): void;
        onWidgetChanged(w: any): void;
        getWidgetsAtRow(row: any): {};
        removeLineWidget(w: any): void;
        addLineWidget(w: any): any;
        $registerLineWidget(w: any): any;
        $updateRows(): void;
        updateOnChange(delta: any): void;
        updateOnFold(e: any, session: any): void;
        detach(e: any): void;
        attach(editor: any): void;
        $onChangeEditor(e: any): void;
        $getWidgetScreenLength(): number;
        getRowLength(row: any): any;
    }

    export class EventListener {
        destroy(): void;
    }

    export class Object {
        values(o: any): any;
        assign(target: any): any;
    }

    export class AppConfig {
        setDefaultValues(path: any, optionHash: any): void;
        setDefaultValue(path: any, name: any, value: any): boolean;
        resetOptions(obj: any): void;
        defineOptions(obj: any, path: any, options: any): any;
    }

    export class Text {
        destroy(): void;
        $useLineGroups(): any;
        $getFoldLineTokens(row: any, foldLine: any): {};
        $renderLine(parent: any, row: any, foldLine: any): void;
        $renderOverflowMessage(parent: any, screenColumn: any, token: any, value: any, hide: any): void;
        $renderSimpleLine(parent: any, tokens: any): any;
        $renderWrappedLine(parent: any, tokens: any, splits: any): void;
        $createLineElement(parent: any): any;
        renderIndentGuide(parent: any, value: any, max: any): any;
        $renderToken(parent: any, screenColumn: any, token: any, value: any): any;
        update(config: any): void;
        $renderLinesFragment(config: any, firstRow: any, lastRow: any): {};
        scrollLines(config: any): any;
        updateLines(config: any, firstRow: any, lastRow: any): any;
        onChangeTabSize(): void;
        $computeTabString(): void;
        setDisplayIndentGuides(display: any): boolean;
        setShowInvisibles(showInvisibles: any): boolean;
        setSession(session: any): void;
        $pollSizeChanges(): any;
        checkForSizeChanges(): void;
        $setFontMetrics(measure: any): void;
        getCharacterWidth(): any;
        getLineHeight(): any;
        setPadding(padding: any): void;
        $updateEolChar(): boolean;
    }

    export class Marker {
        bless(node: any): void;
        complete(): void;
        drawScreenLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawFullLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawBidiSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): void;
        drawSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): any;
        drawMultiLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawTextMarker(stringBuilder: any, range: any, clazz: any, layerConfig: any, extraStyle: any): void;
        $getTop(row: any, layerConfig: any): number;
        update(config: any): void;
        elt(className: any, css: any): void;
        setMarkers(markers: any): void;
        setSession(session: any): void;
        setPadding(padding: any): void;
    }

    export class Lines {
        createCell(row: any, config: any, session: any, initElement: any): any;
        $cacheCell(cell: any): void;
        last(): any;
        unshift(cell: any): void;
        push(cell: any): void;
        pop(): void;
        shift(): void;
        get(index: any): any;
        getLength(): any;
        computeLineHeight(row: any, config: any, session: any): number;
        computeLineTop(row: any, config: any, session: any): number;
        pageChanged(oldConfig: any, newConfig: any): boolean;
        moveContainer(config: any): void;
    }

    export class Gutter {
        getRegion(point: any): "markers" | "foldWidgets";
        $computePadding(): any;
        getShowFoldWidgets(): any;
        setShowFoldWidgets(show: any): void;
        getShowLineNumbers(): any;
        setShowLineNumbers(show: any): void;
        setHighlightGutterLine(highlightGutterLine: any): void;
        $renderCell(cell: any, config: any, fold: any, row: any): any;
        $renderLines(config: any, firstRow: any, lastRow: any): {};
        scrollLines(config: any): any;
        updateLineHighlight(): void;
        $updateCursorRow(): void;
        $updateGutterWidth(config: any): void;
        update(config: any): void;
        $updateAnnotations(delta: any): void;
        setAnnotations(annotations: any): void;
        removeGutterDecoration(row: any, className: any): void;
        addGutterDecoration(row: any, className: any): void;
        setSession(session: any): void;
    }

    export class FontMetrics {
        transformCoordinates(clientPos: any, elPos: any): {};
        $initTransformMeasureNodes(): void;
        $getZoom(element: any): any;
        destroy(): void;
        getCharacterWidth(ch: any): any;
        $measureCharWidth(ch: any): number;
        $measureSizes(node: any): { height: any; width: number; };
        setPolling(val: any): void;
        $pollSizeChanges(): any;
        $addObserver(): void;
        checkForSizeChanges(size: any): void;
        $setMeasureNodeStyles(style: any, isRoot: any): void;
    }

    export class Cursor {
        destroy(): void;
        $setOverwrite(overwrite: any): void;
        update(config: any): void;
        isCursorInView(pixelPos: any, config: any): boolean;
        getPixelPosition(position: any, onScreen: any): { left: any; top: number; };
        restartTimer(): void;
        showCursor(): void;
        hideCursor(): void;
        removeCursor(): any;
        addCursor(): any;
        setSmoothBlinking(smoothBlinking: any): void;
        setBlinkInterval(blinkInterval: any): void;
        setBlinking(blinking: any): void;
        setSession(session: any): void;
        setPadding(padding: any): void;
        $stopCssAnimation(): void;
        $startCssAnimation(): void;
        $updateOpacity(val: any): void;
    }

    export class HashHandler {
        getStatusText(editor: any, data: any): any;
        handleKeyboard(data: any, hashId: any, keyString: any, keyCode: any): { command: any; };
        findKeyCommand(hashId: any, keyString: any): any;
        parseKeys(keys: any): false | { key: any; hashId: number; };
        _buildKeyHash(command: any): void;
        bindKeys(keyList: any): void;
        removeCommands(commands: any): void;
        addCommands(commands: any): void;
        _addCommandToBinding(keyId: any, command: any, position: any): void;
        bindKey(key: any, command: any, position: any): any;
        removeCommand(command: any, keepCommand: any): void;
        addCommand(command: any): void;
    }

    export class IncrementalSearch {
        message(msg: any): void;
        statusMessage(found: any): void;
        convertNeedleToString(): any;
        convertNeedleToRegExp(): any;
        onPaste(text: any): void;
        onMouseDown(evt: any): boolean;
        next(options: any): any;
        removeChar(c: any): any;
        addString(s: any): any;
        highlightAndFindWithNeedle(moveToNext: any, needleUpdateFunc: any): any;
        cancelSearch(reset: any): any;
        highlight(regexp: any): void;
        selectionFix(editor: any): void;
        deactivate(reset: any): void;
        activate(editor: any, backwards: any): void;
        constructor();
    }

    export class StatusBar {
        updateStatus(editor: any): void;
    }

    export class SearchBox {
        isFocused(): boolean;
        show(value: any, isReplace: any): void;
        hide(): void;
        replaceAll(): void;
        replaceAndFindNext(): void;
        replace(): void;
        findAll(): void;
        findPrev(): void;
        findNext(): void;
        updateCounter(): void;
        find(skipCurrent: any, backwards: any, preventScroll: any): void;
        highlight(re: any): void;
        $syncOptions(preventScroll: any): void;
        setSearchRange(range: any): void;
        $init(): void;
        $initElements(sb: any): void;
        setSession(e: any): void;
        setEditor(editor: any): void;
    }

    export class OptionPanel {
        getOption(option: any): any;
        setOption(option: any, value: any): void;
        renderOption(key: any, option: any): {};
        renderOptionControl(key: any, option: any): any;
        renderOptionGroup(group: any): any;
        render(): void;
        add(config: any): void;
    }

    export class ElasticTabstopsLite {
        $izip(widths: any, tabs: any): {};
        $izip_longest(iterables: any): {};
        $adjustRow(row: any, widths: any): void;
        $tabsForRow(row: any): {};
        $rightmostSelectionInCell(selectionColumns: any, cellRightEdge: any): number;
        $setBlockCellWidthsToMax(cellWidths: any): any;
        $selectionColumnsForRow(row: any): {};
        $cellWidthsForRow(row: any): any;
        $findCellWidthsForBlock(row: any): { cellWidths: {}; firstRow: any; };
        processRows(rows: any): void;
    }

    export class BracketMatch {
        $findClosingBracket(bracket: any, position: any, typeRe: any): { row: any; column: any; };
        $findOpeningBracket(bracket: any, position: any, typeRe: any): { row: any; column: any; };
        getMatchingBracketRanges(pos: Point): null | Range[];
        getBracketRange(pos: any): any;
        findMatchingBracket(position: any, chr: any): any;
    }

    export class OccurKeyboardHandler {
        uninstallFrom(editor: any): void;
        installIn(editor: any): void;
        handleKeyboard(data: any, hashId: any, key: any, keyCode: any): any;
        attach(editor: any): void;
    }

    export class IncrementalSearchKeyboardHandler {
        handleKeyboard(data: any, hashId: any, key: any, keyCode: any): any;
        detach(editor: any): void;
        attach(editor: any): void;
    }

    export class BidiHandler {
        offsetToCol(posX: any): Number;
        getSelections(startCol: any, endCol: any): Object[];
        getPosLeft(col: any): number;
        setRtlDirection(editor: any, isRtlDir: any): void;
        isRtlLine(row: any): any;
        setContentWidth(width: any): void;
        setEolChar(eolChar: any): void;
        setShowInvisibles(showInvisibles: any): void;
        updateCharacterWidths(fontMetrics: any): void;
        markAsDirty(): void;
        updateBidiMap(): void;
        updateRowLine(docRow: any, splitIndex: any): void;
        getSplitIndex(): number;
        getDocumentRow(): number;
        onChange(delta: any): void;
        isBidiRow(screenRow: any, docRow: any, splitIndex: any): any;
        constructor(session: EditSession);
    }

    export class BackgroundTokenizer {
        cleanup(): void;
        $tokenizeRow(row: any): any;
        getState(row: Number): any;
        getTokens(row: Number): any;
        stop(): void;
        $updateOnChange(delta: any): void;
        scheduleStart(): void;
        start(startRow: Number): void;
        on(name: 'update', callback: (e: Object) => void): void;
        fireUpdateEvent(firstRow: Number, lastRow: Number): void;
        setDocument(doc: Document): void;
        setTokenizer(tokenizer: Tokenizer): void;
        constructor(tokenizer: Tokenizer, editor: Editor);
    }

    export class FilteredList {
        filterCompletions(items: any, needle: any): {};
        setFilter(str: any): void;
    }

    export class Autocomplete {
        for(editor: any): any;
        destroy(): void;
        onTooltipClick(e: any): void;
        hideDocTooltip(): void;
        showDocTooltip(item: any): void;
        updateDocTooltip(): any;
        cancelContextMenu(): void;
        updateCompletions(keepPopupPosition: any, options: any): any;
        showPopup(editor: any, options: any): void;
        gatherCompletions(editor: any, callback: any): boolean;
        insertMatch(data: any, options: any): boolean;
        goTo(where: any): void;
        mousewheelListener(e: any): void;
        mousedownListener(e: any): void;
        blurListener(e: any): void;
        changeListener(e: any): void;
        detach(): void;
        openPopup(editor: any, prefix: any, keepPopupPosition: any): void;
        getPopup(): any;
        $init(): any;
    }

    export type NewLineMode = 'auto' | 'unix' | 'windows';

    export class Anchor implements EventEmitter {
        constructor(doc: Document, row: number, column: number);
        on(name: 'change', callback: (delta: Delta) => void): void;
        getPosition(): Point;
        getDocument(): Document;
        setPosition(row: number, column: number, noClip?: boolean): void;
        detach(): void;
        attach(doc: Document): void;
        $clipPositionToDocument(row: number, column: number): Point;
        onChange(delta: Delta): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;
    }

    export class Document implements EventEmitter {
        revisit(treeParser: any): void;
        visit(treeParser: any): void;
        $safeApplyDelta(delta: any): void;
        insertNewLine(position: any): any;
        removeLines(firstRow: any, lastRow: any): any;
        insertLines(row: any, lines: any): any;
        constructor(textOrLines: string | string[]);
        on(name: 'change', callback: (delta: Delta) => void): void;
        setValue(text: string): void;
        getValue(): string;
        createAnchor(row: number, column: number): Anchor;
        getNewLineCharacter(): string;
        setNewLineMode(newLineMode: NewLineMode): void;
        getNewLineMode(): NewLineMode;
        isNewLine(text: string): boolean;
        getLine(row: number): string;
        getLines(firstRow: number, lastRow: number): string[];
        getAllLines(): string[];
        getTextRange(range: Range): string;
        getLinesForRange(range: Range): string[];
        insert(position: Point, text: string): Point;
        insertInLine(position: Point, text: string): Point;
        clippedPos(row: number, column: number): Point;
        clonePos(pos: Point): Point;
        pos(row: number, column: number): Point;
        insertFullLines(row: number, lines: string[]): void;
        insertMergedLines(position: Point, lines: string[]): Point;
        remove(range: Range): Point;
        removeInLine(row: number, startColumn: number, endColumn: number): Point;
        removeFullLines(firstRow: number, lastRow: number): string[];
        removeNewLine(row: number): void;
        replace(range: Range, text: string): Point;
        applyDeltas(deltas: Delta[]): void;
        revertDeltas(deltas: Delta[]): void;
        applyDelta(delta: Delta, doNotValidate?: boolean): void;
        revertDelta(delta: Delta): void;
        indexToPosition(index: number, startRow: number): Point;
        positionToIndex(pos: Point, startRow?: number): number;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        $split(text: string): string;
        $detectNewLine(text: string): void;
        getLength(): number;
        $clipPosition(position: Point): Point;
        $splitAndapplyLargeDelta(delta: Delta, MAX: number): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;
    }

    export class FoldLine {
        toString(): any;
        folds: Fold[];
        range: Range;
        start: Point;
        end: Point;

        shiftRow(shift: number): void;
        addFold(fold: Fold): void;
        containsRow(row: number): boolean;
        walk(callback: Function, endRow?: number, endColumn?: number): void;
        getNextFoldTo(row: number, column: number): null | { fold: Fold, kind: string };
        addRemoveChars(row: number, column: number, len: number): void;
        split(row: number, column: number): FoldLine;
        merge(foldLineNext: FoldLine): void;
        idxToPosition(idx: number): Point;
    }

    export class Fold {
        toString(): string;
        range: Range;
        start: Point;
        end: Point;
        foldLine?: FoldLine;
        sameRow: boolean;
        subFolds: Fold[];

        setFoldLine(foldLine: FoldLine): void;
        clone(): Fold;
        addSubFold(fold: Fold): Fold;
        restoreRange(range: Range): void;
    }

    interface Folding {
        foldAllComments(): void;
        foldToLevel(level: any): void;
        getFoldAt(row: number, column: number, side: number): Fold;
        getFoldsInRange(range: Range): Array<Fold>;
        getFoldsInRangeList(ranges: Array<Range>): Array<Fold>;
        getAllFolds(): Array<Fold>;
        addFold(placeholder: string, range: Range): Fold;
        addFolds(folds: Array<Fold>);
        removeFold(fold: Fold);
        removeFolds(folds: Array<Fold>);
        expandFold(fold: Fold);
        expandFolds(folds: Array<Fold>);
        foldAll(startRow: number, endRow: number, depth: number);
        getFoldStringAt(row: number, column: number, trim, foldLine?: FoldLine): string | null;
        getFoldLine(docRow: number, startFoldLine?: string): string | null;
        getNextFoldLine(docRow: number, startFoldLine?: string): string | null;
        getFoldedRowCount(first: number, last: number): number;
        $addFoldLine(foldLine: FoldLine): string;
        unfold(location: number | Point | Range, expandInner?: boolean): Fold[];
        isRowFolded(docRow: number, startFoldRow: string): boolean;
        getRowFoldEnd(docRow: number, startFoldRow: string): number;
        getRowFoldStart(docRow: number, startFoldRow: string): number;
        getFoldDisplayLine(foldLine: FoldLine, endRow: number, endColumn: number, startRow: number, startColumn: number): string;
        getDisplayLine(row: number, endColumn: number, startRow: number, startColumn: number): string;
        $cloneFoldData(): FoldLine;
        toggleFold(tryToUnfold?: any): void;
        getCommentFoldRange(row: number, column: number, dir: number): Range;
        setFoldStyle(style: string): void;
        $setFolding(foldMode?: any): void;
        getParentFoldRangeData(row: number, ignoreCurrent?: any): { range: Range; firstRange: Range };
        onFoldWidgetClick(row: number, e: Event): void;
        $toggleFoldWidget(row: number, options: any): Fold | Range;
        toggleFoldWidget(toggleParent?: any): void;
        updateFoldWidgets(delta: Delta): void;
        tokenizerUpdateFoldWidgets(e: Event): void;
    }

    export class Range {
        constructor(startRow: number, startColumn: number, endRow: number, endColumn: number);
        fromPoints(start: Point, end: Point): Range;
        comparePoints(p1: Point, p2: Point): number;
        start: Point;
        end: Point;

        isEqual(range: Range): boolean;
        toString(): string;
        contains(row: number, column: number): boolean;
        compareRange(range: Range): number;
        comparePoint(p: Point): number;
        containsRange(range: Range): boolean;
        intersects(range: Range): boolean;
        isEnd(row: number, column: number): boolean;
        isStart(row: number, column: number): boolean;
        setStart(row: number, column: number): void;
        setEnd(row: number, column: number): void;
        inside(row: number, column: number): boolean;
        insideStart(row: number, column: number): boolean;
        insideEnd(row: number, column: number): boolean;
        compare(row: number, column: number): number;
        compareStart(row: number, column: number): number;
        compareEnd(row: number, column: number): number;
        compareInside(row: number, column: number): number;
        clipRows(firstRow: number, lastRow: number): Range;
        extend(row: number, column: number): Range;
        isEmpty(): boolean;
        isMultiLine(): boolean;
        clone(): Range;
        collapseRows(): Range;
        toScreenRange(session: EditSession): Range;
        moveBy(row: number, column: number): void;
    }

    export interface EditSessionOptions {
        wrap: string | number;
        wrapMethod: 'code' | 'text' | 'auto';
        indentedSoftWrap: boolean;
        firstLineNumber: number;
        useWorker: boolean;
        useSoftTabs: boolean;
        tabSize: number;
        navigateWithinSoftTabs: boolean;
        foldStyle: 'markbegin' | 'markbeginend' | 'manual';
        overwrite: boolean;
        newLineMode: NewLineMode;
        mode: string;
    }

    export interface VirtualRendererOptions {
        animatedScroll: boolean;
        showInvisibles: boolean;
        showPrintMargin: boolean;
        printMarginColumn: number;
        printMargin: boolean | number;
        showGutter: boolean;
        fadeFoldWidgets: boolean;
        showFoldWidgets: boolean;
        showLineNumbers: boolean;
        displayIndentGuides: boolean;
        highlightGutterLine: boolean;
        vScrollBarAlwaysVisible: boolean;
        hScrollBarAlwaysVisible: boolean;
        fontSize: number;
        fontFamily: string;
        maxLines: number;
        minLines: number;
        scrollPastEnd: boolean;
        fixedWidthGutter: boolean;
        theme: string;
        hasCssTransforms: boolean;
        maxPixelHeight: number;
        useTextareaForIME: boolean;
    }

    export interface MouseHandlerOptions {
        scrollSpeed: number;
        dragDelay: number;
        dragEnabled: boolean;
        focusTimeout: number;
        tooltipFollowsMouse: boolean;
    }

    export interface EditorOptions extends EditSessionOptions,
        MouseHandlerOptions,
        VirtualRendererOptions {
        rtl: any;
        hardWrap: any;
        enableCodeLens: any;
        placeholder: any;
        enableAutoIndent: boolean;
        selectionStyle: string;
        highlightActiveLine: boolean;
        highlightSelectedWord: boolean;
        readOnly: boolean;
        copyWithEmptySelection: boolean;
        cursorStyle: 'ace' | 'slim' | 'smooth' | 'wide';
        mergeUndoDeltas: true | false | 'always';
        behavioursEnabled: boolean;
        wrapBehavioursEnabled: boolean;
        autoScrollEditorIntoView: boolean;
        keyboardHandler: string;
        value: string;
        session: EditSession;
        showLineNumbers: boolean;
        relativeLineNumbers: any;
        useElasticTabstops: any;
        enableEmmet: boolean;
        enableBasicAutocompletion: boolean;
        enableLiveAutocompletion: boolean;
        enableSnippets: boolean;
        enableLinking: boolean;
        rtlText: any;
        spellcheck: boolean;
        useIncrementalSearch: any;
        enableMultiselect: boolean;
        enableBlockSelect: boolean
    }

    export interface SearchOptions {
        needle: string | RegExp;
        preventScroll: boolean;
        backwards: boolean;
        start: Range;
        skipCurrent: boolean;
        range: Range;
        preserveCase: boolean;
        regExp: RegExp;
        wholeWord: string;
        caseSensitive: boolean;
        wrap: boolean;
    }

    export interface EventEmitter {
        eventNames(): any;
        rawListeners(type: any): any;
        prependOnceListener(type: any, listener: any): any;
        prependListener(type: any, listener: any): any;
        getMaxListeners(): any;
        listenerCount(emitter: any, type: any): any;
        listeners(type: any): any;
        removeListener(type: any, listener: any): any;
        addListener(type: any, listener: any): any;
        emit(type: any): boolean;
        setMaxListeners(n: any): any;
        removeAllListeners(type: any): any;
        _signal(eventName: any, e: any): void;
        _emit(eventName: any, e: any): any;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
    }

    export interface Point {
        row: number;
        column: number;
    }

    export interface Delta {
        action: 'insert' | 'remove';
        start: Point;
        end: Point;
        lines: string[];
    }

    export interface Annotation {
        row?: number;
        column?: number;
        text: string;
        type: string;
    }

    export interface Command {
        name?: string;
        bindKey?: string | { mac?: string, win?: string };
        readOnly?: boolean;
        exec: (editor: Editor, args?: any) => void;
    }

    export type CommandLike = Command | ((editor: Editor) => void);

    export class KeyboardHandler {
        handleKeyboard: Function;
    }

    export class MarkerLike {
        range: Range;
        type: string;
        renderer?: MarkerRenderer;
        clazz: string;
        inFront: boolean;
        id: number;
        update?: (html: string[],
            // TODO maybe define Marker class
            marker: any,
            session: EditSession,
            config: any) => void;
    }

    export type MarkerRenderer = (html: string[],
        range: Range,
        left: number,
        top: number,
        config: any) => void;

    export interface Token {
        type: string;
        value: string;
        index?: number;
        start?: number;
    }

    export interface Completion {
        value: string;
        score: number;
        meta?: string;
        name?: string;
        caption?: string;
        docHTML?: string;
        docText?: string;
        snippet?: string;
    }

    export class Tokenizer {
        constructor(rules: Object);
        removeCapturingGroups(src: string): string;
        createSplitterRegexp(src: string, flag?: string): RegExp;
        getLineTokens(line: string, startState: string | string[]): Token[];
        $setMaxTokenCount(m?: number): void;
        $applyToken(str: string): Token[];
        $arrayTokens(str: string): Token[];
    }

    class TokenIterator {
        constructor(session: EditSession, initialRow: number, initialColumn: number);
        getCurrentToken(): Token;
        getCurrentTokenColumn(): number;
        getCurrentTokenRow(): number;
        getCurrentTokenPosition(): Point;
        getCurrentTokenRange(): Range;
        stepBackward(): Token;
        stepForward(): Token;
    }

    export class Mode {
        allowAutoInsert(): boolean;
        getLanguageMode(position: any): "R" | "HTML";
        getMatching(session: any, row: any, column: any, tokenRange: any): any;
        addMarkers(annos: any, mySession: any): void;
        removeMarkers(session: any): void;
        $calculateIndent(line: any, tab: any): any;
        $toIndent(str: any): any;
        supportsFile(filename: any): any;
        $id: string;
        tokenRe: RegExp;
        nonTokenRe: RegExp;
        $defaultBehaviour: CstyleBehaviour;
        lineCommentStart: string;
        blockComment: string;
        $getIndent(line: string): string;
        $delegator(method: string, args: any[], defaultHandler: any): any;
        $createKeywordList(): any;
        getTokenizer(): Tokenizer;
        toggleCommentLines(state: any,
            session: EditSession,
            startRow: number,
            endRow: number): void;
        toggleBlockComment(state: any,
            session: EditSession,
            range: Range,
            cursor: Point): void;
        getNextLineIndent(state: any, line: string, tab: string): string;
        checkOutdent(state: any, line: string, input: string): boolean;
        autoOutdent(state: any, doc: Document, row: number): void;
        // TODO implement WorkerClient types
        createWorker(session: EditSession): any;
        createModeDelegates(mapping: { [key: string]: string }): void;
        transformAction(state: string,
            action: string,
            editor: Editor,
            session: EditSession,
            text: string): any;
        getKeywords(append?: boolean): Array<string | RegExp>;
        getCompletions(state: string,
            session: EditSession,
            pos: Point,
            prefix: string): Completion[];
    }

    export class Config {
        get(key: string): any;
        set(key: string, value: any): void;
        all(): { [key: string]: any };
        moduleUrl(name: string, component?: string): string;
        setModuleUrl(name: string, subst: string): string;
        loadModule(moduleName: string | [string, string],
            onLoad: (module: any) => void): void;
        init(packaged: any): any;
        defineOptions(obj: any, path: string, options: { [key: string]: any }): Config;
        resetOptions(obj: any): void;
        setDefaultValue(path: string, name: string, value: any): void;
        setDefaultValues(path: string, optionHash: { [key: string]: any }): void;
    }

    export interface OptionsProvider {
        setOptions(optList: { [key: string]: any }): void;
        getOptions(optionNames?: string[] | { [key: string]: any }): { [key: string]: any };
        setOption(name: string, value: any): void;
        getOption(name: string): any;
    }

    export class UndoManager {
        constructor();
        addSession(session: EditSession): void;
        add(delta: Delta, allowMerge: boolean, session: EditSession): void;
        addSelection(selection: string, rev?: number): void;
        startNewGroup(): void;
        markIgnored(from: number, to?: number): void;
        getSelection(rev: number, after?: boolean): { value: string, rev: number };
        getRevision(): number;
        getDeltas(from: number, to?: number): Delta[];
        undo(session: EditSession, dontSelect?: boolean): void;
        redo(session: EditSession, dontSelect?: boolean): void;
        reset(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        bookmark(rev?: number): void;
        isAtBookmark(): boolean;
        getChangedRanges(from: number, to?: number): void;
        getChangedLines(from: number, to?: number): void;
        $syncRev(): void;
        toJSON(): void;
        fromJSON(): void;
        $prettyPrint(delta: Delta): string;
    }

    export interface CstyleBehaviour {
        isMaybeInsertedClosing(cursor: any, line: any): boolean;
        isSaneInsertion(editor: Editor, session: EditSession): boolean;
        $matchTokenType(token: Token, types: string[]): boolean;
        recordAutoInsert(editor: Editor, session: EditSession, bracket: string): void;
        recordMaybeInsert(editor: Editor, session: EditSession, bracket: string): void;
        isAutoInsertedClosing(cursor: Point, line: string, bracket: string): boolean;
        popAutoInsertedClosing(): void;
        clearMaybeInsertedClosing(): void;
    }

    export class EditSession implements EventEmitter, OptionsProvider, Folding {
        $setFontMetrics(fm: any): void;
        toString(): string;
        constructor(text: string | Document, mode?: Mode);

        foldAllComments(): void;
        foldToLevel(level: any): void;

        eventNames();
        rawListeners(type: any);
        prependOnceListener(type: any, listener: any);
        prependListener(type: any, listener: any);
        getMaxListeners();
        listenerCount(emitter: any, type: any);
        listeners(type: any);
        removeListener(type: any, listener: any);
        addListener(type: any, listener: any);
        emit(type: any): boolean;
        setMaxListeners(n: any);
        removeAllListeners(type: any);
        _signal(eventName: any, e: any): void;
        _emit(eventName: any, e: any);

        eventNames();
        rawListeners(type: any);
        prependOnceListener(type: any, listener: any);
        prependListener(type: any, listener: any);
        getMaxListeners();
        listenerCount(emitter: any, type: any);
        listeners(type: any);
        removeListener(type: any, listener: any);
        addListener(type: any, listener: any);
        emit(type: any): boolean;
        setMaxListeners(n: any);
        removeAllListeners(type: any);
        _signal(eventName: any, e: any): void;
        _emit(eventName: any, e: any);
        selection: Selection;

        on(name: 'change', callback: (delta: Delta) => void): void;
        on(name: 'changeTabSize'): void;
        on(name: 'changeOverwrite'): void;
        on(name: 'changeBreakpoint', callback: (rows: number[]) => void): void;
        on(name: 'changeAnnotation', callback: (annotations: Annotation[]) => void): void;
        on(name: 'changeMode'): void;
        on(name: 'changeWrapMode'): void;
        on(name: 'changeWrapLimit'): void;
        on(name: 'changeFrontMarker'): void;
        on(name: 'changeBackMarker'): void;

        on(name: 'changeFold',
            callback: (obj: { data: Fold, action: string }) => void): void;
        on(name: 'changeScrollLeft', callback: (scrollLeft: number) => void): void;
        on(name: 'changeScrollTop', callback: (scrollTop: number) => void): void;
        on(name: 'tokenizerUpdate',
            callback: (obj: { data: { first: number, last: number } }) => void): void;


        setOption<T extends keyof EditSessionOptions>(name: T, value: EditSessionOptions[T]): void;
        getOption<T extends keyof EditSessionOptions>(name: T): EditSessionOptions[T];

        setDocument(doc: Document): void;
        getDocument(): Document;
        resetCaches(): void;
        setValue(text: string): void;
        getValue(): string;
        getSelection(): Selection;
        getState(row: number): string;
        getTokens(row: number): Token[];
        getTokenAt(row: number, column: number): Token | null;
        setUndoManager(undoManager: UndoManager): void;
        markUndoGroup(): void;
        getUndoManager(): UndoManager;
        getTabString(): string;
        setUseSoftTabs(val: boolean): void;
        getUseSoftTabs(): boolean;
        setTabSize(tabSize: number): void;
        getTabSize(): number;
        isTabStop(position: Point): boolean;
        setNavigateWithinSoftTabs(navigateWithinSoftTabs: boolean): void;
        getNavigateWithinSoftTabs(): boolean;
        setOverwrite(overwrite: boolean): void;
        getOverwrite(): boolean;
        toggleOverwrite(): void;
        addGutterDecoration(row: number, className: string): void;
        removeGutterDecoration(row: number, className: string): void;
        getBreakpoints(): string[];
        setBreakpoints(rows: number[]): void;
        clearBreakpoints(): void;
        setBreakpoint(row: number, className: string): void;
        clearBreakpoint(row: number): void;
        addMarker(range: Range,
            clazz: string,
            type: MarkerRenderer,
            inFront: boolean): number;
        addDynamicMarker(marker: MarkerLike, inFront: boolean): MarkerLike;
        removeMarker(markerId: number): void;
        getMarkers(inFront?: boolean): MarkerLike[];
        highlight(re: RegExp): void;
        highlightLines(startRow: number,
            endRow: number,
            clazz: string,
            inFront?: boolean): Range;
        setAnnotations(annotations: Annotation[]): void;
        getAnnotations(): Annotation[];
        clearAnnotations(): void;
        getWordRange(row: number, column: number): Range;
        getAWordRange(row: number, column: number): Range;
        setNewLineMode(newLineMode: NewLineMode): void;
        getNewLineMode(): NewLineMode;
        setUseWorker(useWorker: boolean): void;
        getUseWorker(): boolean;
        setMode(mode: string | Mode, callback?: () => void): void;
        getMode(): Mode;
        setScrollTop(scrollTop: number): void;
        getScrollTop(): number;
        setScrollLeft(scrollLeft: number): void;
        getScrollLeft(): number;
        getScreenWidth(): number;
        getLineWidgetMaxWidth(): number;
        getLine(row: number): string;
        getLines(firstRow: number, lastRow: number): string[];
        getLength(): number;
        getTextRange(range: Range): string;
        insert(position: Point, text: string): void;
        remove(range: Range): void;
        removeFullLines(firstRow: number, lastRow: number): void;
        undoChanges(deltas: Delta[], dontSelect?: boolean): void;
        redoChanges(deltas: Delta[], dontSelect?: boolean): void;
        setUndoSelect(enable: boolean): void;
        replace(range: Range, text: string): void;
        moveText(fromRange: Range, toPosition: Point, copy?: boolean): void;
        indentRows(startRow: number, endRow: number, indentString: string): void;
        outdentRows(range: Range): void;
        moveLinesUp(firstRow: number, lastRow: number): void;
        moveLinesDown(firstRow: number, lastRow: number): void;
        duplicateLines(firstRow: number, lastRow: number): void;
        setUseWrapMode(useWrapMode: boolean): void;
        getUseWrapMode(): boolean;
        setWrapLimitRange(min: number, max: number): void;
        adjustWrapLimit(desiredLimit: number): boolean;
        getWrapLimit(): number;
        setWrapLimit(limit: number): void;
        getWrapLimitRange(): { min: number, max: number };
        getRowLineCount(row: number): number;
        getRowWrapIndent(screenRow: number): number;
        getScreenLastRowColumn(screenRow: number): number;
        getDocumentLastRowColumn(docRow: number, docColumn: number): number;
        getdocumentLastRowColumnPosition(docRow: number, docColumn: number): Point;
        getRowSplitData(row: number): string | undefined;
        getScreenTabSize(screenColumn: number): number;
        screenToDocumentRow(screenRow: number, screenColumn: number): number;
        screenToDocumentColumn(screenRow: number, screenColumn: number): number;
        screenToDocumentPosition(screenRow: number,
            screenColumn: number,
            offsetX?: number): Point;
        documentToScreenPosition(docRow: number, docColumn: number): Point;
        documentToScreenPosition(position: Point): Point;
        documentToScreenColumn(row: number, docColumn: number): number;
        documentToScreenRow(docRow: number, docColumn: number): number;
        getScreenLength(): number;
        destroy(): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        off(name: string, callback: Function): void;
        getFoldAt(row: number, column: number, side: number): Fold;
        getFoldsInRange(range: Range): Array<Fold>;
        getFoldsInRangeList(ranges: Array<Range>): Array<Fold>;
        getAllFolds(): Array<Fold>;
        addFold(placeholder: string, range: Range): Fold;
        addFolds(folds: Array<Fold>);
        removeFold(fold: Fold);
        removeFolds(folds: Array<Fold>);
        expandFold(fold: Fold);
        expandFolds(folds: Array<Fold>);
        foldAll(startRow: number, endRow: number, depth: number);
        setOptions(optList: { [key: string]: any }): void;
        getOptions(optionNames?: string[] | { [key: string]: any }): { [key: string]: any };
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        $resetRowCache(docRow: number): void;
        $getRowCacheIndex(cacheArray: number[], val: number): number;
        onChangeFold(e: { data: Fold, action: string }): void;
        onChange(delta: Delta): void;
        $syncInformUndoManager(): void;
        $detectNewLine(text: string): void;
        onReloadTokenizer(e: { data: { first: number, last: number } }): void;
        $onChangeMode(mode: Mode, $isPlaceholder?: boolean): void;
        $stopWorker(): void;
        $startWorker(): void;
        $computeWidth(force: boolean): number;
        $getUndoSelection(deltas: Delta[], isUndo?: boolean): Range;
        $moveLines(firstRow: number, lastRow: number, dir: number): number;
        $clipRowToDocument(row: number): number;
        $clipColumnToRow(row: number, column: number): number;
        $clipPositionToDocument(row: number, column: number): Point;
        $clipRangeToDocument(range: Range): Range;
        $constrainWrapLimit(wrapLimit: number, min: number, max: number): number;
        $updateInternalDataOnChange(delta: Delta): Array<Fold>;
        $updateRowLengthCache(firstRow: number, lastRow: number, b?: any): void;
        $updateWrapData(firstRow: number, lastRow: number): void;
        $computeWrapSplits(tokens: Token[], wrapLimit: number, tabSize: number): number[];
        $getDisplayTokens(str: string, offset: number): string[];
        $getStringScreenWidth(str: string, maxScreenColumn: number, screenColumn: number): number[];
        getRowLength(row: number): number;
        getDocumentLastRowColumnPosition(docRow: number, docColumn: number): number;
        private setFontMetrics(fm: any): any;
        getSelectionMarkers(): any;
        foldAll(startRow: number, endRow: number, depth: number);
        getFoldStringAt(row: number, column: number, trim, foldLine?: FoldLine): string | null;
        getFoldLine(docRow: number, startFoldLine?: string): string | null;
        getNextFoldLine(docRow: number, startFoldLine?: string): string | null;
        getFoldedRowCount(first: number, last: number): number;
        $addFoldLine(foldLine: FoldLine): string;
        unfold(location: number | Point | Range, expandInner?: boolean): Fold[];
        isRowFolded(docRow: number, startFoldRow: string): boolean;
        getRowFoldEnd(docRow: number, startFoldRow: string): number;
        getRowFoldStart(docRow: number, startFoldRow: string): number;
        getFoldDisplayLine(foldLine: FoldLine, endRow: number, endColumn: number, startRow: number, startColumn: number): string;
        getDisplayLine(row: number, endColumn: number, startRow: number, startColumn: number): string;
        $cloneFoldData(): FoldLine;
        toggleFold(tryToUnfold?: any): void;
        getCommentFoldRange(row: number, column: number, dir: number): Range;
        setFoldStyle(style: string): void;
        $setFolding(foldMode?: any): void;
        getParentFoldRangeData(row: number, ignoreCurrent?: any): { range: Range; firstRange: Range };
        onFoldWidgetClick(row: number, e: Event): void;
        $toggleFoldWidget(row: number, options: any): Fold | Range;
        toggleFoldWidget(toggleParent?: any): void;
        updateFoldWidgets(delta: Delta): void;
        tokenizerUpdateFoldWidgets(e: Event): void;
    }

    export class KeyBinding {
        setDefaultHandler(handler: KeyboardHandler): void;
        setKeyboardHandler(handler: KeyboardHandler): void;
        addKeyboardHandler(handler: KeyboardHandler, pos: number): void;
        removeKeyboardHandler(handler: KeyboardHandler): boolean;
        getKeyboardHandler(): KeyboardHandler;
        getStatusText(): string;
        $callKeyboardHandlers(hashId: number, keyString: string, keyCode: number, e: Event): any;
        onCommandKey(e: Event, hashId: number, keyCode: number): void;
        onTextInput(text: string): void;
    }

    export class CommandManager implements EventEmitter {
        setupIncrementalSearch(editor: any, val: any): void;
        on(name: 'exec', callback: (obj: {
            editor: Editor,
            command: Command,
            args: any[]
        }) => void): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        addEventListener(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        removeListener(name: string, callback: Function): void;
        removeEventListener(name: string, callback: Function): void;

        exec(command: string, editor: Editor, args: any): boolean;
        toggleRecording(editor: Editor): void;
        replay(editor: Editor): void;
        addCommand(command: Command): void;
        removeCommand(command: Command, keepCommand?: boolean): void;
        bindKey(key: string | { mac?: string, win?: string },
            command: CommandLike,
            position?: number): void;
        trimMacro(m: any): string;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        setMaxListeners(n: any): any;
    }

    export class VirtualRenderer implements OptionsProvider, EventEmitter {
        removeExtraToken(row: any, column: any): void;
        removeGutterDecoration(row: any, className: any): void;
        addGutterDecoration(row: any, className: any): void;
        mock(): any;
        constructor(container: HTMLElement, theme?: string);
        container: HTMLElement;

        setOption<T extends keyof VirtualRendererOptions>(name: T, value: VirtualRendererOptions[T]): void;
        getOption<T extends keyof VirtualRendererOptions>(name: T): VirtualRendererOptions[T];

        setSession(session: EditSession): void;
        updateLines(firstRow: number, lastRow: number, force?: boolean): void;
        updateText(): void;
        updateFull(force?: boolean): void;
        updateFontSize(): void;
        adjustWrapLimit(): boolean;
        setAnimatedScroll(shouldAnimate: boolean): void;
        getAnimatedScroll(): boolean;
        setShowInvisibles(showInvisibles: boolean): void;
        getShowInvisibles(): boolean;
        setDisplayIndentGuides(display: boolean): void;
        getDisplayIndentGuides(): boolean;
        setShowPrintMargin(showPrintMargin: boolean): void;
        getShowPrintMargin(): boolean;
        setPrintMarginColumn(showPrintMargin: boolean): void;
        getPrintMarginColumn(): boolean;
        setShowGutter(show: boolean): void;
        getShowGutter(): boolean;
        setFadeFoldWidgets(show: boolean): void;
        getFadeFoldWidgets(): boolean;
        setHighlightGutterLine(shouldHighlight: boolean): void;
        getHighlightGutterLine(): boolean;
        getContainerElement(): HTMLElement;
        getMouseEventTarget(): HTMLElement;
        getTextAreaContainer(): HTMLElement;
        getFirstVisibleRow(): number;
        getFirstFullyVisibleRow(): number;
        getLastFullyVisibleRow(): number;
        getLastVisibleRow(): number;
        setPadding(padding: number): void;
        setScrollMargin(top: number,
            bottom: number,
            left: number,
            right: number): void;
        setHScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        getHScrollBarAlwaysVisible(): boolean;
        setVScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        getVScrollBarAlwaysVisible(): boolean;
        freeze(): void;
        unfreeze(): void;
        updateFrontMarkers(): void;
        updateBackMarkers(): void;
        updateBreakpoints(): void;
        setAnnotations(annotations: Annotation[]): void;
        updateCursor(): void;
        hideCursor(): void;
        showCursor(): void;
        scrollSelectionIntoView(anchor: Point,
            lead: Point,
            offset?: number): void;
        scrollCursorIntoView(cursor: Point, offset?: number): void;
        getScrollTop(): number;
        getScrollLeft(): number;
        getScrollTopRow(): number;
        getScrollBottomRow(): number;
        scrollToRow(row: number): void;
        alignCursor(cursor: Point | number, alignment: number): number;
        scrollToLine(line: number,
            center: boolean,
            animate: boolean,
            callback: () => void): void;
        animateScrolling(fromValue: number, callback: () => void): void;
        scrollToY(scrollTop: number): void;
        scrollToX(scrollLeft: number): void;
        scrollTo(x: number, y: number): void;
        scrollBy(deltaX: number, deltaY: number): void;
        isScrollableBy(deltaX: number, deltaY: number): boolean;
        textToScreenCoordinates(row: number, column: number): { pageX: number, pageY: number };
        visualizeFocus(): void;
        visualizeBlur(): void;
        showComposition(position: number): void;
        setCompositionText(text: string): void;
        hideComposition(): void;
        setTheme(theme: string, callback?: () => void): void;
        getTheme(): string;
        setStyle(style: string, include?: boolean): void;
        unsetStyle(style: string): void;
        setCursorStyle(style: string): void;
        setMouseCursor(cursorStyle: string): void;
        attachToShadowRoot(): void;
        destroy(): void;
        setOptions(optList: { [key: string]: any }): void;
        getOptions(optionNames?: string[] | { [key: string]: any }): { [key: string]: any };
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        updateCharacterSize(): void;
        onChangeNewLineMode(): void;
        onChangeTabSize(): void;
        $updateSizeAsync(): void;
        onResize(force: boolean, gutterWidth: number, width?: number, height?: number): void;
        $updateCachedSize(force: boolean, gutterWidth: number, width?: number, height?: number): number;
        onGutterResize(width: number): void;
        $updatePrintMargin(): void;
        $moveTextAreaToCursor(): void;
        setMargin(top: number, bottom: number, left: number, right: number);
        $updateScrollBarV(): void;
        $updateScrollBarH(): void;
        $renderChanges(changes: any, force: boolean): any;
        $autosize(): void;
        $computeLayerConfig(): void;
        $updateLines(): any;
        $getLongestLine(): number;
        $calcSteps(fromValue: number, toValue: number): number[];
        pixelToScreenCoordinates(x: number, y: number): { row: number, column: number, side: number, offsetX: number };
        screenToTextCoordinates(x: number, y: number): Point;
        addToken(text: string, type: string, row: number, column: number): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;
    }


    export class Selection implements EventEmitter {
        joinSelections(): void;
        constructor(session: EditSession);
        on(name: 'changeCursor'): void;
        on(name: 'changeSelection'): void;
        moveCursorWordLeft(): void;
        moveCursorWordRight(): void;
        fromOrientedRange(range: Range): void;
        setSelectionRange(match: any): void;
        getAllRanges(): Range[];
        addRange(range: Range): void;
        isEmpty(): boolean;
        isMultiLine(): boolean;
        setCursor(row: number, column: number): void;
        setAnchor(row: number, column: number): void;
        getAnchor(): Point;
        getCursor(): Point;
        isBackwards(): boolean;
        getRange(): Range;
        clearSelection(): void;
        selectAll(): void;
        setRange(range: Range, reverse?: boolean): void;
        selectTo(row: number, column: number): void;
        selectToPosition(pos: any): void;
        selectUp(): void;
        selectDown(): void;
        selectRight(): void;
        selectLeft(): void;
        selectLineStart(): void;
        selectLineEnd(): void;
        selectFileEnd(): void;
        selectFileStart(): void;
        selectWordRight(): void;
        selectWordLeft(): void;
        getWordRange(): void;
        selectWord(): void;
        selectAWord(): void;
        selectLine(): void;
        moveCursorUp(): void;
        moveCursorDown(): void;
        moveCursorLeft(): void;
        moveCursorRight(): void;
        moveCursorLineStart(): void;
        moveCursorLineEnd(): void;
        moveCursorFileEnd(): void;
        moveCursorFileStart(): void;
        moveCursorLongWordRight(): void;
        moveCursorLongWordLeft(): void;
        moveCursorBy(rows: number, chars: number): void;
        moveCursorToPosition(position: any): void;
        moveCursorTo(row: number, column: number, keepDesiredColumn?: boolean): void;
        moveCursorToScreen(row: number, column: number, keepDesiredColumn: boolean): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        toSingleRange(range: Range): void;
        substractPoint(pos: Range): any;
        mergeOverlappingRanges(): void;
        $onAddRange(range: Range): void;
        $onRemoveRange(removed: Range[]): void;
        $initRangeList(): void;
        splitIntoLines(): void;
        toggleBlockSelection(): void;
        rectangularRangeBlock(screenCursor: Point, screenAnchor: Anchor, includeEmptyLines: boolean): Range;
        setSelectionAnchor(row: number, column: number): void;
        getSelectionAnchor(): Point;
        getSelectionLead(): Point;
        $setSelection(anchorRow: number, anchorColumn: number, cursorRow: number, cursorColumn: number): void;
        $moveSelection(mover: any): void;
        moveTo(row: number, column: number): void;
        moveToPosition(pos: Point): void;
        getLineRange(row: number, excludeLastChar: boolean): Range;
        wouldMoveIntoSoftTab(cursor: Point, tabSize: number, direction: number): boolean;
        $shortWordEndIndex(rightOfCursor: string): number;
        moveCursorShortWordRight(): Function;
        moveCursorShortWordLeft(): Function;
        detach(): void;
        toOrientedRange(range: Range): Range;
        getRangeOfMovements(func: Function): Range;
        toJSON(): Range;
        fromJSON(data: Range): void;
        isEqual(data: Range): boolean;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;
    }

    export class Editor implements OptionsProvider, EventEmitter {
        showSettingsMenu(): void;
        showKeyboardShortcuts(): void;
        prompt(message: any, options: any, callback: any): void;
        autoIndent(): void;
        constructor(renderer: VirtualRenderer, session: EditSession, options?: EditorOptions);
        container: HTMLElement;
        renderer: VirtualRenderer;
        id: string;
        commands: CommandManager;
        keyBinding: KeyBinding;
        session: EditSession;
        selection: Selection;

        on(name: 'blur', callback: (e: Event) => void): void;
        on(name: 'change', callback: (delta: Delta) => void): void;
        on(name: 'changeSelectionStyle', callback: (obj: { data: string }) => void): void;
        on(name: 'changeSession',
            callback: (obj: { session: EditSession, oldSession: EditSession }) => void): void;
        on(name: 'copy', callback: (obj: { text: string }) => void): void;
        on(name: 'focus', callback: (e: Event) => void): void;
        on(name: 'paste', callback: (obj: { text: string }) => void): void;

        setOption<T extends keyof EditorOptions>(name: T, value: EditorOptions[T]): void;
        getOption<T extends keyof EditorOptions>(name: T): EditorOptions[T];

        setKeyboardHandler(keyboardHandler: string, callback?: () => void): void;
        getKeyboardHandler(): string;
        setSession(session: EditSession): void;
        getSession(): EditSession;
        setValue(val: string, cursorPos?: number): string;
        getValue(): string;
        getSelection(): Selection;
        resize(force?: boolean): void;
        setTheme(theme: string, callback?: () => void): void;
        getTheme(): string;
        setStyle(style: string): void;
        unsetStyle(style: string): void;
        getFontSize(): string;
        setFontSize(size: string): void;
        focus(): void;
        isFocused(): boolean;
        flur(): void;
        getSelectedText(): string;
        getCopyText(): string;
        execCommand(command: string | string[], args: any): boolean;
        insert(text: string, pasted?: boolean): void;
        setOverwrite(overwrite: boolean): void;
        getOverwrite(): boolean;
        toggleOverwrite(): void;
        setScrollSpeed(speed: number): void;
        getScrollSpeed(): number;
        setDragDelay(dragDelay: number): void;
        getDragDelay(): number;
        setSelectionStyle(val: string): void;
        getSelectionStyle(): string;
        setHighlightActiveLine(shouldHighlight: boolean): void;
        getHighlightActiveLine(): boolean;
        setHighlightGutterLine(shouldHighlight: boolean): void;
        getHighlightGutterLine(): boolean;
        setHighlightSelectedWord(shouldHighlight: boolean): void;
        getHighlightSelectedWord(): boolean;
        setAnimatedScroll(shouldAnimate: boolean): void;
        getAnimatedScroll(): boolean;
        setShowInvisibles(showInvisibles: boolean): void;
        getShowInvisibles(): boolean;
        setDisplayIndentGuides(display: boolean): void;
        getDisplayIndentGuides(): boolean;
        setShowPrintMargin(showPrintMargin: boolean): void;
        getShowPrintMargin(): boolean;
        setPrintMarginColumn(showPrintMargin: number): void;
        getPrintMarginColumn(): number;
        setReadOnly(readOnly: boolean): void;
        getReadOnly(): boolean;
        setBehavioursEnabled(enabled: boolean): void;
        getBehavioursEnabled(): boolean;
        setWrapBehavioursEnabled(enabled: boolean): void;
        getWrapBehavioursEnabled(): boolean;
        setShowFoldWidgets(show: boolean): void;
        getShowFoldWidgets(): boolean;
        setFadeFoldWidgets(fade: boolean): void;
        getFadeFoldWidgets(): boolean;
        remove(dir?: 'left' | 'right'): void;
        removeWordRight(): void;
        removeWordLeft(): void;
        removeLineToEnd(): void;
        splitLine(): void;
        transposeLetters(): void;
        toLowerCase(): void;
        toUpperCase(): void;
        indent(): void;
        blockIndent(): void;
        blockOutdent(): void;
        sortLines(): void;
        toggleCommentLines(): void;
        toggleBlockComment(): void;
        modifyNumber(amount: number): void;
        removeLines(): void;
        duplicateSelection(): void;
        moveLinesDown(): void;
        moveLinesUp(): void;
        moveText(range: Range, toPosition: Point, copy?: boolean): Range;
        copyLinesUp(): void;
        copyLinesDown(): void;
        getFirstVisibleRow(): number;
        getLastVisibleRow(): number;
        isRowVisible(row: number): boolean;
        isRowFullyVisible(row: number): boolean;
        selectPageDown(): void;
        selectPageUp(): void;
        gotoPageDown(): void;
        gotoPageUp(): void;
        scrollPageDown(): void;
        scrollPageUp(): void;
        scrollToRow(row: number): void;
        scrollToLine(line: number, center: boolean, animate: boolean, callback: () => void): void;
        centerSelection(): void;
        getCursorPosition(): Point;
        getCursorPositionScreen(): Point;
        getSelectionRange(): Range;
        selectAll(): void;
        clearSelection(): void;
        moveCursorTo(row: number, column: number): void;
        moveCursorToPosition(pos: Point): void;
        jumpToMatching(select: boolean, expand: boolean): void;
        gotoLine(lineNumber: number, column: number, animate: boolean): void;
        navigateTo(row: number, column: number): void;
        navigateUp(): void;
        navigateDown(): void;
        navigateLeft(): void;
        navigateRight(): void;
        navigateLineStart(): void;
        navigateLineEnd(): void;
        navigateFileEnd(): void;
        navigateFileStart(): void;
        navigateWordRight(): void;
        navigateWordLeft(): void;
        replace(replacement: string, options?: Partial<SearchOptions>): number;
        replaceAll(replacement: string, options?: Partial<SearchOptions>): number;
        getLastSearchOptions(): Partial<SearchOptions>;
        find(needle: string, options?: Partial<SearchOptions>, animate?: boolean): void;
        findNext(options?: Partial<SearchOptions>, animate?: boolean): void;
        findPrevious(options?: Partial<SearchOptions>, animate?: boolean): void;
        undo(): void;
        redo(): void;
        destroy(): void;
        setAutoScrollEditorIntoView(enable: boolean): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        setOptions(optList: { [key: string]: any }): void;
        getOptions(optionNames?: string[] | { [key: string]: any }): { [key: string]: any };
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        $initOperationListeners(): void;
        startOperation(commandEvent: { command: string, args: any }): void;
        endOperation(e: { returnValue: boolean }): void;
        $historyTracker(e: { command: Command; args: any }): void;
        $highlightBrackets(): void;
        $highlightTags(): void;
        blur(): void;
        onFocus(e: Event): void;
        onBlur(e: Event): void;
        $cursorChange(): void;
        onDocumentChange(delta: Delta): void;
        onTokenizerUpdate(e: Event): void;
        onScrollTopChange(): void;
        onScrollLeftChange(): void;
        onCursorChange(): void;
        $updateHighlightActiveLine(): void;
        onSelectionChange(e: Event): void;
        $getSelectionHighLightRegexp(): void;
        onChangeFrontMarker(): void;
        onChangeBackMarker(): void;
        onChangeBreakpoint(): void;
        onChangeAnnotation(): void;
        onChangeMode(e: Event): void;
        onChangeWrapLimit(): void;
        onChangeWrapMode(): void;
        onChangeFold(): void;
        onCopy(): void;
        onCut(): void;
        onPaste(text: string, event: Event): void;
        $handlePaste(e: string | { text: string }): void;
        onTextInput(text: string, composition?: any): void;
        applyComposition(text: string, composition: any): void;
        onCommandKey(e: Event, hashId: any, keyCode: any): void;
        removeToLineStart(): void;
        removeToLineEnd(): void;
        getNumberAt(row: number, column: number): number;
        toggleWord(): void;
        private $moveLines(dir: any, copy?: any): void;
        $getSelectedRows(range: Range): { first: number, last: number };
        onCompositionStart(compositionState: any): void;
        onCompositionUpdate(text: string): void;
        onCompositionEnd(): void;
        $getVisibleRowCount(): number;
        $moveByPage(dir: number, select: boolean): void;
        $tryReplace(range: Range, replacement: any): Range | null;
        revealRange(range: Range, animate: boolean): void;
        $resetCursorStyle(): void;
        updateSelectionMarkers(): void;
        addSelectionMarker(orientedRange: Range): Range;
        removeSelectionMarker(range: Range): void;
        removeSelectionMarkers(range: Range): void;
        $onAddRange(e: Event): void;
        $onRemoveRange(e: Event): void;
        $onMultiSelect(e: Event): void;
        $onSingleSelect(e: Event): void;
        $onMultiSelectExec(e: Event): void;
        forEachSelection(cmd: Command, args: string, options?: any): void;
        exitMultiSelectMode(): void;
        $checkMultiselectChange(e: Event, anchor: Anchor): void;
        findAll(needle: string, options?: any, additive?: boolean): number;
        selectMoreLines(dir: number, skip: boolean): void;
        transposeSelections(dir: number): void;
        selectMore(dir: number, skip: boolean, stopAtFirst?: any): void;
        alignCursors(): void;
        $reAlignText(lines: string[], forceLeft?: any): string[];
        insertSnippet(content: any, options: any): any;
        expandSnippet(options: any): any;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        addListener(type: any, listener: any): any;

        emit(type: any): boolean;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(emitter: any, type: any): any;

        listeners(type: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;
    }

    export class Reader { }
}

export namespace parserlib {
    export class Reporter {
    }

    export namespace util {
        export class SyntaxUnit {
            fromToken(token: Object): parserlib.util.SyntaxUnit;
            constructor(text: String, line: Number, col: Number);
        }
        export class EventTarget {
        }
        export class StringReader {
        }
        export class SyntaxError {
        }
        export class TokenStreamBase {
            createTokenData(tokens: any[]): any[];
            constructor(input: String | StringReader);
        }
        export class Combinator extends SyntaxUnit {
        }
        export class MediaFeature extends SyntaxUnit {
            constructor(name: SyntaxUnit, value: SyntaxUnit);
        }
        export class ValidationError {
        }
    }

    export namespace css {
        export class Specificity {
            calculate(selector: any): parserlib.css.Specificity;
            constructor(a: Number, b: Number, c: Number, d: Number);
        }
        export class PropertyValuePart extends util.SyntaxUnit {
            fromToken(token: Object): parserlib.css.PropertyValuePart;
            serializeString(value: any): string;
            parseString(str: any): any;
            constructor(text: String, line: Number, col: Number);
        }
        export class PropertyValue extends util.SyntaxUnit {
        }
        export class PropertyValueIterator {
            drop(): void;
            restore(): void;
            previous(): parserlib.css.PropertyValuePart;
            next(): parserlib.css.PropertyValuePart;
            peek(count: any): parserlib.css.PropertyValuePart;
            mark(): void;
            hasNext(): boolean;
            isFirst(): boolean;
            count(): Number;
            constructor(value: parserlib.css.PropertyValue);
        }
        export class Parser {
        }
        export class PropertyName extends util.SyntaxUnit {
        }
        export class Selector extends util.SyntaxUnit {
            constructor(parts: any[], line: Number, col: Number);
        }
        export class SelectorPart extends util.SyntaxUnit {
            constructor(elementName: String, modifiers: any[], text: String, line: Number, col: Number);
        }
        export class SelectorSubPart extends util.SyntaxUnit {
        }
        export class TokenStream {
        }
        export class MediaQuery extends util.SyntaxUnit {
            constructor(modifier: String, mediaType: String, parts: any[], line: Number, col: Number);
        }
    }
}

export const version: string;
export const config: Ace.Config;
export function require(name: string): any;
export function edit(el: Element | string, options?: Partial<Ace.EditorOptions>): Ace.Editor;
export function createEditSession(text: Ace.Document | string, mode: Ace.Mode): Ace.EditSession;
